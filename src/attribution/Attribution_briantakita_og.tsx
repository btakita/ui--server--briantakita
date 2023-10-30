import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_briantakita_og($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/briantakita-og.jpg">
			<Atb href="https://www.flickr.com/photos/12972883@N00/193503222">
				Graph of Der letze Schrei - Blog
			</Atb>
			{` by `}
			<Atb href="https://www.flickr.com/photos/12972883@N00">
				jÖrg
			</Atb>
			{` is licensed under `}
			<Atb href="https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse">
				{`CC BY-SA 2.0 `}
				<img
					src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
					style="height: 1em; margin-right: 0.125em; display: inline;"
				/>
				<img
					src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
					style="height: 1em; margin-right: 0.125em;display: inline;"
				/>
				<img
					src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
					style="height: 1em; margin-right: 0.125em; display: inline;"
				/>
			</Atb>
		</Attribution>
	)
}
