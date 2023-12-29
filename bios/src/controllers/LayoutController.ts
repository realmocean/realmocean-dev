import { useDeleteSessions, useGetMe } from "@realmocean/sdk";
import { UIController, UIRouteOutlet, UIScene, UIView, DialogContainer, VStack, Fragment, UINavigate, Text, Button, useNavigate } from "@tuval/forms";

export class LayoutController extends UIController {
    public BindRouterParams() {

    }

    public LoadView(): UIView {

        const navigate = useNavigate();
        const { deleteSessions, isError, isSuccess } = useDeleteSessions('console');

        return (
            UIScene(
                VStack(
                    UIRouteOutlet().width('100%').height('100%')
                )
            )

        )
    }
}