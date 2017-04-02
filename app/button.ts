VSS.init({
    usePlatformStyles: false
});

VSS.register("satishkumaarponnusamy.dashboard-templates.hub-actions", () => {
    return {
        getMenuItems: function (context) {
            var deferred = XDM.createDeferred();
            deferred.resolve([{
                id: "open-template",
                title: "Template",
                icon: "css://bowtie-icon bowtie-share",
                action: (actionContext) => {
                    VSS.getService(VSS.ServiceIds.Dialog).then((dialogService: IHostDialogService) => {
                        const contributionId = "satishkumaarponnusamy.dashboard-templates.dialog";
                        const dialogOptions = {
                            title: "Dashboard Templates",
                            buttons: null,
                            height: 500
                        };

                        // Show dialog
                        dialogService.openDialog(contributionId, dialogOptions, {});
                    });
                }
            }]);
            return deferred.promise;
        }
    };
});