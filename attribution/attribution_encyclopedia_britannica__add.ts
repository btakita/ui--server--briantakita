import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import { i_, span_ } from 'relementjs/html'
export function attribution_encyclopedia_britannica__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:wide_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: 'encyclopedia-britannica.jpg'
		}, [
			tb_a_({
				href: 'https://web.archive.org/web/20170225182500/https://www.flickr.com/photos/bostontx/4461314652/'
			}, 'flicker.com'),
			'—',
			tb_a_({
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
