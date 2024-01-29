import { atb_ } from '@btakita/ui--server--blog/anchor'
import { attribution__add } from '@btakita/ui--server--blog/attribution'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { i_, span_ } from 'relementjs/html'
export function attribution_encyclopedia_britannica__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		attribution__add<env_T>({
			ctx,
			attribution_id: '/assets/images/encyclopedia-britannica.jpg'
		}, [
			atb_({
				href: 'https://web.archive.org/web/20170225182500/https://www.flickr.com/photos/bostontx/4461314652/'
			}, 'flicker.com'),
			'—',
			atb_({
				href: 'https://creativecommons.org/licenses/by-nc/2.0/',
				class: 'photo-license-url',
				rel: 'license cc:license'
			}, [
				i_({ class: 'ui-icon-tiny-2cc' }),
				span_('Some rights reserved')
			])
		])
	)
}
