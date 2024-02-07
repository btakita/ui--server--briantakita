import { type root_ctx_T } from '@rappstack/domain--any--blog'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
export function attribution_neurons__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: 'neurons.jpg'
		}, [
			tb_a_({
				href: 'http://www.flickr.com/photos/hmmmmm/3903176411/'
			}, 'From Parthiv Haldipur'),
			tb_a_({
				href: 'https://creativecommons.org/licenses/by-nc/2.0/',
				rel: 'external nofollow'
			}, 'Licensed under Creative Commons')
		])
	)
}
