import { useDeleteSessions, useGetMe } from "@realmocean/sdk";
import { UIController, UIRouteOutlet, UIScene, UIView, DialogContainer, VStack, Fragment, UINavigate, Text, Button, useNavigate } from "@tuval/forms";

export class LayoutController extends UIController {


    public BindRouterParams() {

    }
    public LoadView(): UIView {

        const navigate = useNavigate();

        const { me, isLoading, isError } = useGetMe('console');
        const { deleteSessions } = useDeleteSessions('console');

        return (

            UIScene(
                VStack(
                    Text(isError?.toString()),
                    isLoading ? Fragment() :
                        isError ? UINavigate('/login') :
                            VStack(
                                Button(
                                    Text('Logout')
                                ).onClick(() => {
                                    deleteSessions();
                                    navigate('/login');
                                }),

                                UIRouteOutlet().width('100%').height('100%')
                            )
                )
            )
        )
    }
}