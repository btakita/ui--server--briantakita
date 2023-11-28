import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function V_attribution_web_framework_realworld_app_sizes<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({
			ctx,
			attribution_id: '/assets/images/web-framework-realworld-app-sizes.png'
		},
			V_atb<env_T>({ ctx, href: 'https://levelup.gitconnected.com/a-solid-realworld-demo-comparison-8c3363448fd8#255b' },
				'© Ryan Carniato')))
}
