import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

type Props = React.PropsWithChildren<{ title: string }> & RouteComponentProps<any>

export const Layout = withRouter((props: Props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
})