/// <reference lib="dom" />
import './Comments_to_pair_or_not_to_pair.css'
export function Comments_to_pair_or_not_to_pair() {
	return (
		<div id="comments">
			<h3>3 Comments</h3>
			<ul>
				<li>
					<div class="gravatar">
						<img
							alt=""
							src="http://www.gravatar.com/avatar/d5fa38c6dc1cd61b01397e11b30425d7"
							class="avatar avatar-50 photo"
							height="50"
							width="50"/>
					</div>
					<div class="comment">
						<span class="commentauthor">
							<a
								href="https://web.archive.org/web/20120513132750/http://40withegg.com/"
								rel="external nofollow"
								class="url"
							>
								Joe Moore
							</a> says...
						</span>
						<span class="commentdate">Comment on March 10, 2010 at 7:55 am</span>
						<div class="commenttext">
							<p>
								Keep us posted as to how your move away from pair programming fairs. For example, if you find that more
								bugs are introduced and thus the soloing benefits are canceled out… or if that <em>doesn’t</em> happen,
								too.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div class="gravatar">
						<img
							alt=""
							src="http://www.gravatar.com/avatar/2475563a3ba1da4018af64f964ab45b0"
							class="avatar avatar-50 photo"
							height="50"
							width="50"/>
					</div>
					<div class="comment">
						<span class="commentauthor">
							<a href="http://thewoolleyweb.com/" rel="external nofollow" class="url">
								Chad Woolley
							</a> says...
						</span>
						<span class="commentdate">Comment on March 10, 2010 at 8:08 pm</span>
						<div class="commenttext">
							<p>But who’s gonna call YAGNI on you, Brian?</p>
							<p>
								Not that You’re Ever Gonna Need That
								<img src="/assets/images/icon_wink.gif" alt=";)" class="wp-smiley"/>
							</p>
							<p>– Chad</p>
						</div>
					</div>
				</li>
				<li>
					<div class="gravatar">
						<img alt="" src="http://www.gravatar.com/avatar/10dcd7cf4ff4b679c284cedf7be4f68f"
							class="avatar avatar-50 photo" height="50" width="50"/>
					</div>
					<div class="comment">
						<span class="commentauthor">
							<a href="https://web.archive.org/web/20120513132750/http://www.honk.com/" rel="external nofollow"
								class="url">Brian</a> says...
						</span>
						<span class="commentdate">Comment on March 23, 2010 at 9:27 am</span>
						<div class="commenttext">
							<p>
								Thanks. Yeah, I still need YAGNI at times <img
								src="/assets/images/icon_smile.gif" alt=":-)" class="wp-smiley"
							/>.
							</p>
							<p>The developers here seem to like the autonomy. We are still in an open workspace and we talk to each
								other regarding our changes.</p>
							<p>I’m not sure yet what effect this has on our velocity and defect rate. The types of changes vary from
								major release to major release.</p>
							<p>There have not been major issues (that I’m aware of) due to lack of pairing so far. Our history of
								pairing has helped in giving us a unified development direction/idioms.</p>
							<p>One side-note, we have an awesome pair here from Blazing Cloud (Jen-Mei Wu and Ali Crockett). Jen-Mei
								is an experienced Rubyist and Ali is new to Ruby but experienced in other technologies.</p>
							<p>Pairing totally makes sense here as the knowledge transfer is high and it better enables developers to
								be productive on a new codebase.</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	)
}
