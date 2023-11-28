import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function V_attribution_neurons<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({ ctx, attribution_id: '/assets/images/neurons.jpg' },
			V_atb({ href: 'http://www.flickr.com/photos/hmmmmm/3903176411/' },
				'From Parthiv Haldipur'),
			V_atb({ href: 'https://creativecommons.org/licenses/by-nc/2.0/', rel: 'external nofollow' },
				'Licensed under Creative Commons'))
	)
}
