import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
export function attribution_web_framework_realworld_app_sizes__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:wide_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: 'web-framework-realworld-app-sizes.png'
		}, [
			tb_a_({
				href: 'https://levelup.gitconnected.com/a-solid-realworld-demo-comparison-8c3363448fd8#255b',
				nofollow: true,
			}, '© Ryan Carniato')
		]))
}
