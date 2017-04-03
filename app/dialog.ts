import * as Controls from "VSS/Controls";
import * as Navigation from "VSS/Controls/Navigation";
import * as CatalogTab from "./CatalogTab";
import * as ManageTab from "./ManageTab";

var shareDialog = () => {
  var $container = $(".container");
  var $view = $(".pivot-view");
  var $catalogTab = $("#catalog");
  var $manageTab = $("#manage");

  var $templateNameInput = $("#manage .template-name");
  var $templateDescriptionInput = $("#manage .template-description");

  var pivotView = <Navigation.PivotView>Controls.Enhancement.enhance(Navigation.PivotView, $view);

  pivotView.getElement().on("changed", function (sender, view) {
    onTabChanged(sender, view);
  });

  function onTabChanged(sender, view) {
    switch (view.id) {
      case "catalog":
        $catalogTab.show();
        $manageTab.hide();
        break;
      case "manage":
        $manageTab.show();
        $catalogTab.hide();
        break;
      default:
        break;
    }
  }

  pivotView.setSelectedView("catalog");

  function onCancelClicked() {
    console.log("Closing dialog!");
  }

  function onDeleteAllClicked() {
    console.log("Deleted all templates");
  }

  $(".delete-all-btn").click(onDeleteAllClicked);
  $(".cancel-btn").click(onCancelClicked);
  return {

  };
}

VSS.register("dashboard-template-dialog", shareDialog);
VSS.notifyLoadSucceeded();
