import { Text, UIController, UIRoute, UIRouteOutlet, UIRoutes, UIView } from "@tuval/forms"
import { LayoutController } from "./LayoutController"
import { LoginController } from "./controllers/LoginController"
import { HomeController } from "./controllers/HomeController"


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
            UIRoute('/', LayoutController).children(
                UIRoute('*', HomeController),
            ),
            UIRoute('/login', LoginController),
            UIRoute('/logout', LoginController)
        )
    )
}