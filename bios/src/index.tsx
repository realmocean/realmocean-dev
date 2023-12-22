import { EventBus } from '@tuval/core';
import { StartBios } from '@tuval/forms';

import { BiosMainController, MainController } from './MainController';
import './css/global.scss';


(function (history: any) {
    var pushState = history.pushState;
    history.pushState = function (state) {


        const result = pushState.apply(history, arguments);

        if (typeof history.onpushstate == "function") {
            history.onpushstate({ state: state });
        }

        return result;
    }
})(window.history);


window.onpopstate = (history as any).onpushstate = function (e) {
    EventBus.Default.fire('history.changed', { url: window.location.href })
};


//RM.install({
//  token: 'a2kx9xb:n9iz4ut',
//    ingestUrl: 'https://in.requestmetrics.com/v1'
/* ingestUrl: scriptEl.getAttribute("data-rm-ingest"),
monitorSelfCalls: !!scriptEl.getAttribute("data-rm-monitor-self"),
tags: tags */
// });

const params: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop as any),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
//let value = params.some_key; // "some_value"

window.addEventListener("load", (event) => {
    StartBios(MainController);
   /*  if (params.tenant_id) {
        RealmBrokerClient.SetTenantAndGetSessionInfo(params.tenant_id).then((session_info: any) => {
          
            StateService.SetStateVariable('session', session_info);
            StateService.SetSessionId(session_info.session_id);

            container.register('IStateService', { useValue: StateService });

            Tracker.configure({
                userId: session_info.account_id,
                sessionId: session_info.session_id
            });


            Tracker.addMetadata('realm', useSessionService().RealmId);
            Tracker.addMetadata('tenant', useSessionService().TenantId);


            StartBios(BiosController);

        })
    } else {
        RealmBrokerClient.GetSessionInfo().then((session_info: any) => {
         
            StateService.SetStateVariable('session', session_info);
            StateService.SetSessionId(session_info.session_id);

            container.register('IStateService', { useValue: StateService });

            Tracker.configure({
                userId: session_info.account_id,
                sessionId: session_info.session_id
            });

            Tracker.addMetadata('realm', useSessionService().RealmId);
            Tracker.addMetadata('tenant', useSessionService().TenantId);

            StartBios(BiosController);

        })
    } */
});

//StartBios(BiosController)