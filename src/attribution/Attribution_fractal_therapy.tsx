import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_fractal_therapy($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/fractal-therapy.jpg">
			<Atb href="https://web.archive.org/web/20090816093348/http://www.synchronium.net/2009/07/02/5-books-that-really-will-expand-your-mind/comment-page-1">
				Possibly © 2009 - Synchronium
			</Atb>
			—
			<Atb href="https://tineye.com/search/a5bd1885e1add649bad8c363d14ed3485a773cf3?sort=crawl_date&order=asc&page=1">
				tineye.com search
			</Atb>
		</Attribution>
	)
}
