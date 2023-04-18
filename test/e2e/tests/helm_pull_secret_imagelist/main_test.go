//go:build e2e
// +build e2e

package e2e

import (
	"os"
	"testing"

	eraserv1alpha1 "github.com/Azure/eraser/api/v1alpha1"
	"github.com/Azure/eraser/test/e2e/util"
	utilruntime "k8s.io/apimachinery/pkg/util/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	"sigs.k8s.io/e2e-framework/pkg/env"
	"sigs.k8s.io/e2e-framework/pkg/envconf"
	"sigs.k8s.io/e2e-framework/pkg/envfuncs"
)

func TestMain(m *testing.M) {
	utilruntime.Must(eraserv1alpha1.AddToScheme(scheme.Scheme))

	eraserImage := util.ParsedImages.EraserImage
	managerImage := util.ParsedImages.ManagerImage

	util.Testenv = env.NewWithConfig(envconf.New())
	// Create KinD Cluster
	util.Testenv.Setup(
		envfuncs.CreateKindClusterWithConfig(util.KindClusterName, util.NodeVersion, "../../kind-config.yaml"),
		envfuncs.CreateNamespace(util.TestNamespace),
		util.LoadImageToCluster(util.KindClusterName, util.ManagerImage, util.ManagerTarballPath),
		util.LoadImageToCluster(util.KindClusterName, util.EraserImage, util.EraserTarballPath),
		util.DeployEraserHelm(util.TestNamespace,
			"--set", util.ScannerEnable.Set("false"),
			"--set", util.EraserImageRepo.Set(eraserImage.Repo),
			"--set", util.EraserImageTag.Set(eraserImage.Tag),
			"--set", util.CollectorEnable.Set("false"),
			"--set", util.ManagerImageRepo.Set(managerImage.Repo),
			"--set", util.ManagerImageTag.Set(managerImage.Tag),
			"--set-json", util.ImagePullSecrets.Set(util.ImagePullSecretJSON),
			"--set", util.CleanupOnSuccessDelay.Set("1m"),
		),
	).Finish(
		envfuncs.DestroyKindCluster(util.KindClusterName),
	)
	os.Exit(util.Testenv.Run(m))
}