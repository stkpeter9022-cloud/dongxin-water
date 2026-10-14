import { ChatIcon, PhoneIcon } from "./ContactActions";
import { lineUrl, phoneUrl } from "../lib/site-content";
export default function FloatingButtons(){return <nav className="contact-dock" aria-label="快速聯絡"><a href={phoneUrl} aria-label="立即致電棟鑫水電"><PhoneIcon />立即來電</a><a href={lineUrl} target="_blank" rel="noopener noreferrer" aria-label="透過 LINE 聯絡棟鑫水電"><ChatIcon />LINE 詢問</a></nav>;}
