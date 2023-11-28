import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { img_ } from 'relementjs/html'
export function V_attribution_1200px_Creation_of_Adam<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({
				ctx,
				attribution_id: '/assets/images/1200px-Creation_of_Adam.jpg'
			},
			V_atb<env_T>({ ctx, href: 'http://en.wikipedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1m.jpg' },
				'Wikipedia')),
			'— Licensed under ',
			V_atb<env_T>({ ctx, href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
				'Creative Commons ',
				img_({
					src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg',
					style: 'height: 1em; margin-right: 0.125em; display: inline;'
				}))
	)
}
