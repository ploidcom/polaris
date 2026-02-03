import React from 'react';
import type { CallbackAction, LinkAction } from '../../types';
export interface BreadcrumbsProps {
    /**
     * @deprecated Back action link
     * Use `breadcrumbs` prop instead as documented [here](https://shopify.dev/docs/api/app-bridge/previous-versions/actions/titlebar#using-titlebar-with-polaris)
     */
    backAction: CallbackAction | LinkAction;
}
export declare function Breadcrumbs({ backAction }: BreadcrumbsProps): React.JSX.Element;
//# sourceMappingURL=Breadcrumbs.d.ts.map