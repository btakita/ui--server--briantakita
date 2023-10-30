import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_encyclopedia_britannica($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/encyclopedia-britannica.jpg">
			<Atb href="https://web.archive.org/web/20170225182500/https://www.flickr.com/photos/bostontx/4461314652/">
				flicker.com
			</Atb>
			—
			<Atb
				href="https://creativecommons.org/licenses/by-nc/2.0/"
				class="photo-license-url"
				rel="license cc:license"
			>
				<i class="ui-icon-tiny-2cc"></i>
				<span>Some rights reserved</span>
			</Atb>
		</Attribution>
	)
}
