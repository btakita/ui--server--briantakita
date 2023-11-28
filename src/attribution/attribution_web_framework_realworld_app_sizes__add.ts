import { atb_, attribution__add } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function attribution_web_framework_realworld_app_sizes__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		attribution__add<env_T>({
			ctx,
			attribution_id: '/assets/images/web-framework-realworld-app-sizes.png'
		},
			atb_<env_T>({ href: 'https://levelup.gitconnected.com/a-solid-realworld-demo-comparison-8c3363448fd8#255b' },
				'© Ryan Carniato')))
}
