import { Atb } from '@btakita/ui--server--blog'
import { type VoidProps } from 'solid-js'
export function _Atb__new(innerText:string, href:string) {
  return ($p:VoidProps<{ innerText?:string }> = {})=>
		<Atb innerText={$p.innerText || innerText} href={href}/>
}