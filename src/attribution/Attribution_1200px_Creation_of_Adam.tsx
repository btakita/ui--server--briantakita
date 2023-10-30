import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_1200px_Creation_of_Adam($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/1200px-Creation_of_Adam.jpg">
			<Atb href="http://en.wikipedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1m.jpg">
				Wikipedia
			</Atb>
			—
			Licensed under{` `}
			<Atb href="https://commons.wikimedia.org/wiki/Commons:Licensing">
				Creative Commons{` `}
				<img
					src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
					style="height: 1em; margin-right: 0.125em; display: inline;"
				/>
			</Atb>
		</Attribution>
	)
}
