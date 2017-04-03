VSS.init({
    usePlatformStyles: false
});

var hubAction = {
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
                        height: 600,
                        width: 800
                    };

                    dialogService.openDialog(contributionId, dialogOptions, {});
                });
            }
        }]);
        return deferred.promise;
    }
};

VSS.register("satishkumaarponnusamy.dashboard-templates.hub-actions", hubAction);
