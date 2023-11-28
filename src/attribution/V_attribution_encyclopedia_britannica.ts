import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { i_, span_ } from 'relementjs/html'
export function V_attribution_encyclopedia_britannica<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({ ctx, attribution_id: '/assets/images/encyclopedia-britannica.jpg' },
			V_atb<env_T>(
				{ ctx, href: 'https://web.archive.org/web/20170225182500/https://www.flickr.com/photos/bostontx/4461314652/' },
				'flicker.com'),
			'—',
			V_atb<env_T>({
					ctx,
					href: 'https://creativecommons.org/licenses/by-nc/2.0/',
					class: 'photo-license-url',
					rel: 'license cc:license'
				},
				i_({ class: 'ui-icon-tiny-2cc' }),
				span_('Some rights reserved')))
	)
}
