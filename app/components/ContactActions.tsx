import { lineUrl, phoneUrl } from "../lib/site-content";
export function PhoneIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z" /></svg>;
}
export function ChatIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z" /><path d="M7 11h10M7 15h6" /></svg>;
}
export default function ContactActions({ phoneLabel = "0918-808-209", lineLabel = "LINE 諮詢" }: { phoneLabel?: string; lineLabel?: string }) {
  return <div className="contact-actions"><a className="button button-gold" href={phoneUrl}><PhoneIcon />{phoneLabel}</a><a className="button button-line" href={lineUrl} target="_blank" rel="noopener noreferrer"><ChatIcon />{lineLabel}</a></div>;
}
