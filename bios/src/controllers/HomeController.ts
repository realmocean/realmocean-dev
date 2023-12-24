import { Text, UIController, UIView } from "@tuval/forms";

export class HomeController extends UIController {
    public override LoadView(): UIView {
        return (
            Text('Home')
        )
    }
}