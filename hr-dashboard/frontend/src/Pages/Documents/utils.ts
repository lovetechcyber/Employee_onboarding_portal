export interface SideBarProps {
  onClick: (title: string) => void;
  activeLink: string;
}

export interface DocumentProps {
  date: string;
  docName: string;
  docType: string;
}
