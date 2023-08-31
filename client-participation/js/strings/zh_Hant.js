// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

var s = {};

s.agree = "贊成";
s.disagree = "反對";
s.pass = "略過 / 不確定";
s.x_wrote = "表示：";
s.x_tweeted = "推文：";
s.group_123 = "群組：";
s.majorityOpinion = "共同意見";
s.majorityOpinionShort = "共識";
s.info = "說明";
s.addPolisToYourSite = "<img style='height: 20px; margin: 0px 4px;' src='{{URL}}'/>";
s.privacy = "隱私";
s.TOS = "使用條款";
s.writePrompt = "分享您的觀點...";
s.anonPerson = "匿名人士";
s.helpWhatAmISeeingTitle = "這是什麼？";
s.helpWhatAmISeeing = "立場相近的人，會自動歸類到同一個群組。點擊群組，就可以看到這些人的共同意見。";
s.helpWhatDoIDoTitle = " 我可以做什麼？";
s.helpWhatDoIDo = "針對其他人的意見，按下「贊成」或「反對」。你也可以寫下您的觀點（每個意見單獨一則）。邀請朋友來一起討論！";
s.writeCommentHelpText = "如果您的觀點沒有人寫過，請務必將它<strong>寫下來</strong>！</i>";
s.helpWriteListIntro = "如何寫一個好的陳述？";
s.helpWriteListStandalone = "獨立且完整的想法";
s.helpWriteListRaisNew = "提出新的觀點、經驗或議題";
s.helpWriteListShort = "清晰且簡明扼要（限制在 140 個字內）";
s.heresHowGroupVoted = "這是群組 {{GROUP_NUMBER}} 的看法：";
s.one_person = "{{x}} 人";
s.x_people = "{{x}} 人";
s.acrossAllPtpts = "所有參與者：";
s.xPtptsSawThisComment = "位參與者看過這個意見。";
s.xOfThoseAgreed = "位參與者表示贊成。";
s.xOfthoseDisagreed = "位參與者表示反對。";
s.pctAgreed = "{{pct}}% 贊成";
s.pctDisagreed = "{{pct}}% 反對";
s.pctAgreedOfGroup = "群組 {{group}} 裡，有 {{pct}}% 的人贊成";
s.pctDisagreedOfGroup = "群組 {{group}} 裡，有 {{pct}}% 的人反對";
s.commentSent = "意見已送出！";
s.commentSendFailed = "送出意見時發生錯誤。";
s.commentSendFailedEmpty = "送出意見時發生錯誤：意見不可為空白。";
s.commentSendFailedTooLong = "送出意見時發生錯誤：意見過長。";
s.commentSendFailedDuplicate = "送出意見時發生錯誤：完全相同的意見已存在。";
s.connectFacebook = "連結 Facebook";
s.connectTwitter = "連結 Twitter";
s.connectToPostPrompt = "發表意見前，請先連結登入帳號。我們不會貼文在您的牆上。";
s.tip = "祕訣：";
s.tipCommentsRandom = "意見會隨機顯示。您不需要回覆別人的看法。";
s.tipOneIdea = "有多個意見請分開來寫，一次一個，好讓其他人表達贊成或反對。";
s.tipNoQuestions = "請直接陳述您的感受或觀點，不要使用問句。";
s.notSentSinceDemo = "（純屬測試，並未送出）";
s.submitComment = "送出";
s.tipStarred = "已經標記為重點。";
s.participantHelpWelcomeText = "歡迎來到一種嶄新的討論方式 - 對眾人的意見<span style='font-weight: 700;'>投票</span>，並且<span style='font-weight: 700;'>貢獻</span>您的觀點。";
s.participantHelpGroupsText = "立場相近的人，會<span style='font-weight: 700;'>自動歸類到同一個群組。</span>點擊群組，就可以看到這些人的共同意見<a style='font-weight: 700; cursor: pointer; text-decoration: underline' id='helpTextGroupsExpand'>...</a>";
s.participantHelpGroupsNotYetText = "只有在有 7 位不同參與者開始投票後，視覺分析模型才會出現。";
s.helpWhatAreGroupsDetail = "<p>您可能在其他網站上看過「推薦產品」或「推薦電影」的服務。這些服務使用統計資訊，找出和您品味相近的人，然後用那些人的紀錄來向您推薦。</p> <p>當您在這裡按下「贊成」或「反對」時，您就會自動將您的頭像移動到相近的群組裡！上方顯示的每個群組，都是由立場相近的人組成的。這樣的公開討論，每次都能展現出令人意外的洞見。請點擊一個群組 - 看看他們共同的意見、發現某個群組的獨特之處！";
s.socialConnectPrompt = "連結帳號，就可以看到您的朋友、追蹤的人的立場如何。";
s.connectFbButton = "與 Facebook 連結";
s.connectTwButton = "與 Twitter 連結";

s.showTranslationButton = "啟用外部翻譯";
s.hideTranslationButton = "停用外部翻譯";
s.thirdPartyTranslationDisclaimer = "翻譯服務由第三方提供";
s.noCommentsYouVotedOnAll = "您已對所有的意見完成投票。";
s.notificationsEnterEmail = "輸入您的 Email，當有新的意見可以投票時，我們會寄信通知您：";
s.ideathonTitle = "歡迎分享您對生成式 AI 的應用倫理看法與創作心得"
s.ideathonDescription = `
<article>
            <p>
	        <span>1️⃣ AI 究竟是工具、協作者、抑或創作者？</span>
	        <span>2️⃣ 使用 AI 生成的內容，受法律保護嗎？著作權屬於誰？</span>
	    </p>
	    <p>
	        <span>🟢 AI 帶來深刻的社會變革，其演算法、智慧財產權、科技倫理、公共服務和社會影響等議題備受關注，也為民主治理帶來新挑戰。因應生成式 AI 熱潮引發社會關注相關議題，數位部誠摯邀請點子松投件者、創作者和相關專家，透過 Polis 線上平台和審議式工作坊，一同探討 AI 應用倫理和創作心得，以實踐開放政府的精神，確保人工智慧發展與群眾利益保持一致，為點子松徵件辦法、政策制定與技術開發提供重要 AI 治理方向。</span>
	    </p>
	    <p>
	        <span>🗨️ 我們將討論的議題類別包含但不限於以下類別，歡迎新增議題類別：</span>
	    </p>
	    <ol>
	        <li>
	            <span>AI 基礎認知（AI 是工具、協作者、還是創作者？）</span>
	        </li>
	        <li>
	            <span>AI 用於創作（AI 工具能啟發人類創意嗎？）</span>
	        </li>
	        <li>
	            <span>版權與分潤機制（使用 AI 生成的內容，受法律保護嗎？著作權屬於誰？）</span>
	        </li>
	        <li>
	            <span>社會及產業的影響（AI 對社會及產業生態將造成哪些改變？政府是否應加強監管？）</span>
	        </li>
	        <li>
	            <span>公平使用的機會、偏見和歧視（如何促進公平使用 AI 的機會？公平公正的 AI 是可能的嗎？）</span>
	        </li>
	        <li>
	            <span>AI 用於公共治理（AI 將如何影響政府制定政策、組織運作、提供公共服務？）</span>
	        </li>
	        <li>
	            <span>AI 對教育學習的影響（AI 如何影響人們形成知識、培養技能與素養，以及面向未來的生活、工作、社會的準備？）</span>
	        </li>
	        <li>
	            <span>徵件辦法（點子松徵件應鼓勵、限制或防範投件者使用 AI 進行創作？）</span>
	        </li>
	    </ol>
	    <p>
	        <span>💡 竭誠歡迎於下列意見中，投下您「同意」、「不同意」或「跳過」的想法，並寫下其他您對生成式 AI 的應用倫理、創作心得與徵件辦法之意見。</span>
	    </p>
</article>
`

module.exports = s;
