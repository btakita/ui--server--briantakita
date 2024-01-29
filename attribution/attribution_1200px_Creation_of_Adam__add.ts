import { type root_ctx_T } from '@btakita/domain--any--blog'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { attribution__add } from '@btakita/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
import { img_ } from 'relementjs/html'
import { type Node_T } from 'relementjs/isomorphic'
export function attribution_1200px_Creation_of_Adam__add<env_T extends relement_env_T>(
	{ ctx }:{
		ctx:root_ctx_T
	}
):Node_T<env_T, HTMLElement> {
	return (
		attribution__add<env_T>({
				ctx,
				attribution_id: '/assets/images/1200px-Creation_of_Adam.jpg'
			},
			atb_({ href: 'http://en.wikipedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1m.jpg' },
				'Wikipedia')),
			'— Licensed under ',
			atb_({ href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
				'Creative Commons ',
				img_({
					src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg',
					style: 'height: 1em; margin-right: 0.125em; display: inline;'
				}))
	)
}
