import React from 'react';
import type { SpaceScale } from '@shopify/polaris-tokens';
import type { ResponsiveProp } from '../../utilities/css';
type Align = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
type InlineAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type Element = 'div' | 'span' | 'ul' | 'ol' | 'li' | 'fieldset';
type Gap = ResponsiveProp<SpaceScale>;
export interface BlockStackProps extends React.AriaAttributes {
    children?: React.ReactNode;
    /** HTML Element type
     * @default 'div'
     */
    as?: Element;
    /** Vertical alignment of children */
    align?: Align;
    /** Horizontal alignment of children */
    inlineAlign?: InlineAlign;
    /** The spacing between children */
    gap?: Gap;
    /** HTML id attribute */
    id?: string;
    /** Reverse the render order of child items
     * @default false
     */
    reverseOrder?: boolean;
    /** Aria role */
    role?: Extract<React.AriaRole, 'status' | 'presentation' | 'menu' | 'listbox' | 'combobox' | 'group'>;
}
export declare const BlockStack: ({ as, children, align, inlineAlign, gap, id, reverseOrder, ...restProps }: BlockStackProps) => React.DetailedReactHTMLElement<{
    /** Aria role */
    role?: "menu" | "combobox" | "group" | "listbox" | "presentation" | "status" | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "false" | "true") | undefined;
    'aria-autocomplete'?: "none" | "list" | "inline" | "both" | undefined;
    'aria-braillelabel'?: string | undefined;
    'aria-brailleroledescription'?: string | undefined;
    'aria-busy'?: (boolean | "false" | "true") | undefined;
    'aria-checked'?: boolean | "false" | "true" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colindextext'?: string | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "false" | "true" | "page" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-description'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "false" | "true") | undefined;
    'aria-dropeffect'?: "none" | "copy" | "link" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "false" | "true") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "false" | "true") | undefined;
    'aria-haspopup'?: boolean | "grid" | "dialog" | "menu" | "false" | "true" | "listbox" | "tree" | undefined;
    'aria-hidden'?: (boolean | "false" | "true") | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "false" | "true") | undefined;
    'aria-multiline'?: (boolean | "false" | "true") | undefined;
    'aria-multiselectable'?: (boolean | "false" | "true") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "false" | "true" | "mixed" | undefined;
    'aria-readonly'?: (boolean | "false" | "true") | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "false" | "true") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowindextext'?: string | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "false" | "true") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    className: string;
    id: string | undefined;
    style: React.CSSProperties | undefined;
}, HTMLElement>;
export {};
//# sourceMappingURL=BlockStack.d.ts.map