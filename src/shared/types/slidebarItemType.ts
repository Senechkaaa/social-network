import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";


export type IconType = React.ForwardRefExoticComponent<Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>>

export interface SlidebarItemType {
   path: string,
   text: string,
   icon: IconType
}