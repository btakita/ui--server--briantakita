import { atb_, attribution__add } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function attribution_neurons__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		attribution__add<env_T>({ ctx, attribution_id: '/assets/images/neurons.jpg' },
			atb_({ href: 'http://www.flickr.com/photos/hmmmmm/3903176411/' },
				'From Parthiv Haldipur'),
			atb_({ href: 'https://creativecommons.org/licenses/by-nc/2.0/', rel: 'external nofollow' },
				'Licensed under Creative Commons'))
	)
}
