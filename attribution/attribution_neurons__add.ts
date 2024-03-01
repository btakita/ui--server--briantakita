import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
export function attribution_neurons__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:wide_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: 'neurons.jpg'
		}, [
			tb_a_({
				href: 'http://www.flickr.com/photos/hmmmmm/3903176411/',
				nofollow: true,
			}, 'From Parthiv Haldipur'),
			tb_a_({
				href: 'https://creativecommons.org/licenses/by-nc/2.0/',
				nofollow: true,
			}, 'Licensed under Creative Commons')
		])
	)
}
