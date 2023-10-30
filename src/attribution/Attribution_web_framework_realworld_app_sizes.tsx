import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_web_framework_realworld_app_sizes($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/web-framework-realworld-app-sizes.png">
			<Atb href="https://levelup.gitconnected.com/a-solid-realworld-demo-comparison-8c3363448fd8#255b">
				© Ryan Carniato
			</Atb>
		</Attribution>
	)
}
