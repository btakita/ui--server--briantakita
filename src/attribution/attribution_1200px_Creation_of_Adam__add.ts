import { atb_, attribution__add } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { img_ } from 'relementjs/html'
export function attribution_1200px_Creation_of_Adam__add<env_T extends relement_env_T>(
	{ ctx }:{
		ctx:Ctx
	}
) {
	return (
		attribution__add<env_T>({
				ctx,
				attribution_id: '/assets/images/1200px-Creation_of_Adam.jpg'
			},
			atb_<env_T>({ href: 'http://en.wikipedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1m.jpg' },
				'Wikipedia')),
			'— Licensed under ',
			atb_<env_T>({ href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
				'Creative Commons ',
				img_({
					src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg',
					style: 'height: 1em; margin-right: 0.125em; display: inline;'
				}))
	)
}
