import { Text, UIController, UIRoute, UIRouteOutlet, UIRoutes, UIView } from "@tuval/forms"


class KontDrakula extends UIController {
    LoadView(): UIView {
        return (
            UIRouteOutlet().width('100%').height('100%')
        )
    }
}
class AddController extends UIController {
    LoadView(): UIView {
        return (
            Text('asdfdf')
        )
    }
}
export const Routes = () => {
    return (
        UIRoutes(
           /*  UIRoute('/realm', NewBiosController).children(
               UIRoute('organization/:team_id', OrganizationController),
                UIRoute('workspace/:project_id', WorkspaceController)
              
            ) */
        )
    )
}