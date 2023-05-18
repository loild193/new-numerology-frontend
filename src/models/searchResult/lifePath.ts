/* eslint-disable max-len */
const MAPPING = new Map<number, string>()

MAPPING.set(
  1,
  `
    <p class="font-bold">Chân dung khách hàng này là hình ảnh nhà lãnh đạo, thủ lĩnh, phù hợp với vai trò cải cách, dẫn dắt.</p>
    <li>Họ có phẩm chất và năng lượng của nhà lãnh đạo, dẫn dắt đội nhóm và là người có sức ảnh hưởng đến người khác.</li>
    <li>Họ thích dẫn đầu, tiên phong, sẵn sàng làm những việc khó vì vậy bạn hãy tôn trọng, ghi nhận họ hoặc dành cho họ những ưu đãi, đặc biệt và đặc quyền.</li>
    <li>Họ độc lập, quyết đoán, không thích bị áp đặt, không thích rập khuôn vì vậy tuyệt đối không áp đặt mà chỉ dừng lại ở cung cấp thông tin và để lại quyền ra quyết định cho họ.</li>
    <li>Họ tập trung mục tiêu, thiếu kiên nhẫn trong việc lắng nghe nên tác phong cần chuyên nghiệp, chuẩn bị kỹ càng, trình bày ngắn gọn vào trọng tâm vấn đề.</li>
    <li>Cam kết nhận trách nhiệm cá nhân của bạn với họ, nếu có xảy ra bất kỳ sự cố nào ngoài ý muốn đừng trốn tránh, đừng vòng vo, đừng đổ lỗi, hãy trung thực và đối diện với họ vì với tinh thần quản đại, họ sẵn sàng bỏ qua và giúp đỡ bạn.</li>
    <li>Họ thích những điều mới mẻ, đột phá, khác biệt,… nên bạn cần nêu ra được điểm khác biệt của sản phẩm/dịch vụ.</li>
    <li>Lưu ý: họ không phải là người quá kiên nhẫn trong việc lắng nghe, trong một vài trường hợp sẽ khá bảo thủ; tự tin thái quá.</li>
`,
)
MAPPING.set(
  2,
  `
  <p class="font-bold">Chân dung khách hàng này là người yêu thương, hòa giải, cộng đồng</p>
  <li>Họ là người đại diện cho tình yêu thương, rất tình cảm, họ ưu tiên mối quan hệ hơn công việc vì vậy hãy nhẹ nhàng, yêu thương, chăm sóc và khích lệ.</li>
  <li>Thời điểm đầu có vẻ họ hơi nhút nhát và không sôi nổi nhưng khả năng thấu hiểu và trực giác của họ rất tốt vì vậy hãy chân thành và trung thực với họ, bạn sẽ nhận được kết quả bất ngờ.</li>
  <li>Đừng quá vội vàng trong quá trình bán hàng vì người này không muốn bị dồn ép.</li>
  <li>Họ có khả năng lắng nghe tuyệt vời, đồng cảm, kết nối và bao quát rất tốt nhưng nhiều khi thiếu quyết đoán và khó tự ra quyết định, vì vậy bạn có thể chọn giúp họ một phương án hợp nhất đi kèm sự cam kết và bảo hành cá nhân của bạn.</li>
  <li>Họ sẵn sàng hi sinh lợi ích cá nhân vì gia đình và những người thân yêu, thích mang lại giá trị mang tính cộng đồng vì vậy lòng trắc ẩn, sự yêu thương và cả nể cũng chính là yếu điểm của họ, hãy đến với họ bằng sự nhiệt huyết, chân thành bằng cả trái tim. Nếu có xảy ra bất kỳ sự cố nào ngoài ý muốn, đừng nỗ lực tranh luận đối đầu đúng sai, thiệt hơn vì có thể bạn sẽ khiến họ bị tổn thương và có thể họ không nói ra nhưng họ thật lòng không muốn như vậy.</li>
  <li>Họ thích những cái đẹp, nghệ thuật, độc đáo nên hãy tạo một không gian ấm cúng và gần gũi để kết nối với họ được tốt hơn.</li>
  <li>Rất giỏi đàm phán ngoại giao, cố vấn, nhà tâm lý là những khả năng nổi bật của họ.</li>
  <li>Tuy nhiên đôi lúc họ quá nhạy cảm, hay nhượng bộ và quan tâm người khác nghĩ gì về mình.</li>
  <li>Lưu ý: những điểm nổi bật của họ: khéo léo, hòa đồng, kiên nhẫn, không thích tranh giành quyền lợi.</li>

`,
)
MAPPING.set(
  3,
  `<p class="font-bold">Chân dung khách hàng này là nghệ sĩ, ngoại giao truyền cảm hứng</p>
  <li>Họ là người biết cách thể hiện và bộc lộ bản thân rất tốt, rất lạc quan, luôn nhìn cuộc sống theo hướng tích cực và sự tươi mới.</li>
  <li>Họ có xu hướng thích thể hiện cá tính bản thân và thường nổi bật, tỏa sáng trước đám đông.</li>
  <li>Năng lượng của họ thúc đẩy sự phát triển, mở rộng, họ nhiệt tình, phóng khoáng và có khả năng lan truyền, quảng bá, lan tỏa thông điệp rất tốt.</li>
  <li>Họ vui vẻ, dễ thương, hài hước, khả năng kể chuyện rất thu hút, giao tiếp biết cách sử dụng ngôn từ hoa mỹ, biết nhấn nhá, có truyền tải cảm xúc, hãy khen ngợi họ về điều này.</li>
  <li>Họ là làm việc nhanh, tốc độ, tổng quan, không thích chi tiết, thiếu kiên nhẫn nên hãy chia sẻ với họ về tương lai, những kết quả có thể đạt được thay vì quá trình, chia sẻ với họ về lợi ích và tính năng có thể nhận được ngay thay vì sự an toàn hay những giá trị mang tính bền bỉ.</li>
  <li>Họ là người có cảm xúc cao, quyết liệt và không chấp nhận đầu hàng nên thường ra quyết định rất nhanh và không chịu thua kém người khác. Hãy để họ có cơ hội được nói nhiều hơn, được lựa chọn, được ra quyết định và đừng quên tán dương và khen ngợi họ về điều đó.</li>
  <li>Nếu có xảy ra bất kỳ sự cố nào ngoài ý muốn đừng tranh luận đối đầu đúng sai, thiệt hơn, đừng có chỉ trích, bắt lỗi, phê phán họ vì họ có xu hướng thích những điều tích cực hơn là tiêu cực.</li>
  <li>Đẳng cấp, đẹp, xuất hiện thu hút và chú trọng hình thức, hãy chú trọng đến ngoại hình khi bạn gặp họ.</li>
  <li>Giỏi kinh doanh, đặc biệt bán hàng rất tốt nên bán được hàng cho họ, họ sẽ giúp bạn giới thiệu cho rất nhiều người.</li>
  <li>Đôi khi họ rất nhạy cảm, không thích nghe những lời chê bai chỉ trích từ người khác.</li>
  <li>Họ thiếu kiên nhẫn, dễ bị mất năng lượng, đôi khi quá bốc đồng, hấp tấp hoặc thiếu tính chịu trách nhiệm về mình.</li>
`,
)
MAPPING.set(
  4,
  `<p class="font-bold">Chân dung khách hàng này là Nhà tổ chức, chuyên gia phân tích</p>
  <li>Họ rất logic, cần những bằng chứng khoa học để thuyết phục, sống thực tế, đơn giản, không màu mè, không vụ lợi nên bạn không nên nói những điều không có căn cứ, thiếu chính xác, khoa trương, viển vong.</li>
  <li>Họ là người rất nguyên tắc, kỷ luật và trọng chữ tín, vì vậy, hãy cẩn trọng trong việc đúng hẹn, đúng kế hoạch, đúng thỏa thuận và cẩn trọng với lời ăn tiếng nói vì rất có thể một vài từ ngữ không đúng tình huống của bạn có thể hỏng việc.</li>
  <li>Họ là người của công việc truyền thống, cẩn trọng và thích sự an toàn, họ bị bất an với những rủi ro nằm ngoài tầm kiểm soát vì vậy hãy nói về sự cam kết, bảo hành quá trình thực hiện, sự bền bỉ sau đó mới đến lợi ích.</li>
  <li>Họ thích nghe hành trình để đạt được mục tiêu hơn là mục tiêu đạt được là gì, thích nghe bạn đã làm được gì hơn là bạn sẽ làm gì tới đây.</li>
  <li>Họ là người rất chắc chắn trong việc ra quyết định và không thích bị dồn ép gấp gáp vì vậy bạn cần kiên nhẫn và để họ tự ra quyết định.</li>
  <li>Họ ý thức mạnh mẽ về đúng và sai, rất trung thực và đánh giá cao sự trung thực ở người khác nên bạn hãy luôn trung thực với họ.</li>
  <li>Họ thích sự chuyên nghiệp, quy trình, rõ ràng nên hãy khẳng định bạn là chuyên gia, hãy thẳng thắn hỏi họ rằng đã có kế hoạch cho việc mua hay nghiêm túc tìm hiểu sản phẩm của bạn chưa? Mức giá mà họ có thể quyết định ở tầm nào vì đây là người kỷ luật và sẽ khó phá vỡ khuôn khổ hay hạn mức mình đã đặt ra từ trước.</li>
  <li>Họ không phải là người quá niềm nở, họ ít chia sẻ nên hãy chủ động chia sẻ câu chuyện của mình dần trước sẽ khiến họ cởi mở hơn.</li>
  <li>Đây là khách hàng tương đối khó thuyết phục nhưng lại là khách hàng vô cùng trung thành và là mối quan hệ đáng tin cậy.</li>
  <li>Những từ khóa cần lưu ý với họ là niềm tin, sự thật, kết quả và an toàn.</li>
  `,
)
MAPPING.set(
  5,
  `<p class="font-bold">Chân dung khách hàng là người của sự tự do bản thể, người sáng tạo.</p>
  <li>Họ vô cùng sáng tạo như một nhà cải cách, thích sự sáng tạo, sự khác biệt, không thích giống ai.</li>
  <li>Họ thích trải nghiệm thực tế, thích tham gia vào những chuyến phiêu lưu, mạo hiểm, họ không ngừng tìm kiếm sự thay đổi và những lý thú trong cuộc sống nên chủ đề về du lịch, những cuộc phiêu lưu, những điều kỳ bí có thể là gợi ý tốt để tìm được điểm chung với khách hàng này.</li>
  <li>Họ dám nghĩ, dám làm và hay có lối đi riêng vì vậy hãy để họ được trong bối cảnh tích cực, tự do và thỏa sức sáng tạo.</li>
  <li>Họ thích sản phẩm nhiều tính năng mới, nhiều quyền lợi, đa dạng lợi ích, ngắn hạn, tính thực tế cao.</li>
  <li>Họ là người giỏi giao tiếp, năng lượng cao, giỏi bán hàng trước đám đông, marketing, dễ ra quyết định và thích được quyết định, không thích bị áp đặt.</li>
  <li>Họ có xu hướng mua hàng và quyết định bằng cảm xúc, ra quyết định nhanh.</li>
  <li>Họ thường thiếu kiên nhẫn, không thích nghe dài dòng và quá chi tiết, cần nói có trọng tâm và cảm xúc, đi nhanh vào vấn đề và nói ngay được điểm khác biệt, đặc biệt.</li>
  <li>Họ phóng khoáng, hào sảng và quan hệ xã hội tốt.
  <li>Họ là người gợi cảm, hấp dẫn và có khả năng thu hút người khác giới.</li>
  <li>Trong làm việc đội nhóm, họ có khả năng thuyết phục và truyển cảm hứng, tạo động lực cho người khác vô cùng tuyệt vời.</li>
  <li>Lưu ý trong một số trường hợp họ cả thèm chóng chán, dễ sống bản năng, thiếu kỷ luật, nuông chiều cảm xúc, nóng vội bốc đồng và thiếu thực tế.</li>
`,
)
MAPPING.set(
  6,
  `<p class="font-bold">Chân dung khách hàng là một người chăm sóc, người cha/người mẹ vĩ đại.</li>
  <li>Khách hàng này luôn hướng về mái ấm gia đình hoặc những đóng góp tốt đẹp cho cộng đồng nên để có sự đồng điệu, phá băng ngay từ giây phút đầu tiên thì chủ đề gia đình là nội dung trao đổi bạn có thể lựa chọn đầu tiên.</li>
  <li>Họ có rung động mạnh mẽ về tình yêu thương, lòng trắc ẩn, thích chăm sóc giúp đỡ người khác vô điều kiện vì vậy khách hàng này sẽ quan tâm đến lợi ích của người khác cao hơn lợi ích cho chính mình, vì vậy bạn có thể chia sẻ về sản phẩm/dịch vụ mình đang cung cấp sẽ đem lại lợi ích gì cho những người thân yêu của họ.</li>
  <li>Họ sẽ quan tâm nhiều đến chất lượng, sự đảm bảo, sự an toàn về sức khỏe sau đó đến tính năng ưu đãi và chính sách.</li>
  <li>Họ thích được giúp đỡ mọi người, thích cho đi hơn nhận lại, thích được người khác xin mình lời khuyên nên hãy khôn khéo đặt câu hỏi và đừng quên ghi nhận và biết ơn họ về những chia sẻ đó.</li>
  <li>Họ là người rất bao dung và vị tha nên nếu không may bạn có lỗi gì hãy mạnh dạn đối diện và xin lỗi chân thành, họ sẵn lòng tha thứ bỏ qua và giúp đỡ bạn vô điều kiện.</li>
  <li>Họ là người thích thơ ca, nghệ thuật, âm nhạc và cái đẹp tinh tế, bạn hãy để ý đến điều này để có thể chọn quà tặng hoặc dành lời khen dành cho họ.</li>
  <li>Trong đội nhóm, người này sẽ lãnh đạo theo phong cách yêu thương, chăm sóc.</li>
  <li>Đôi khi họ quá lo lắng và quan tâm đến người khác thay vì bản thân, ở một trạng thái khác họ có thể quan tâm thái quá, bao đồng, kiểm soát, áp đặt, gia trưởng và cố chấp.</li>
`,
)
MAPPING.set(
  7,
  `<p class="font-bold">Chân dung khách hàng là một người tìm kiếm đức tin, trí tuệ sâu sắc, chiến lược gia</p>
  <li>Họ là người bí ẩn, hơi trầm lặng, tư duy rất tốt, giỏi phân tích, trực giác tốt, khá đa nghi và hay đặt những câu hỏi để tìm kiếm sự thật vì vậy hãy chuẩn bị thật tốt về ưu điểm, sự độc đáo, thông tin về sản phẩm, chính sách và kỹ năng bán hàng nhé.</li>
  <li>Không gian thiên nhiên cây cỏ hoa lá, yên tĩnh và riêng tư là nơi bạn nên chọn để có một cuộc gặp mặt thành công, hãy kiên nhẫn lắng nghe.
  <li>Họ là người cầu toàn tỉ mỉ và chi tiết, thường mọi thứ họ làm và hướng tới sự hoàn hảo và một tiêu chuẩn rất cao, vì vậy hãy thể hiện mình chuyên nghiệp và là chuyên gia.</li>
  <li>Họ thích sự cam kết, chất lượng, sự đảm bảo sau đó mới đến quyền lợi và lợi ích, hãy đưa ra hoặc kể cho họ những câu chuyện thực tế, lịch sử phát triển để thuyết phục họ.</li>
  <li>Họ có năng lực đúc kết, có khả năng quan sát và đánh giá tình huống chính xác đến kinh ngạc nên hãy chân thành và đừng nổ lực qua mặt họ nhé, nếu có thiếu sót thì hãy thành thật, đó là điều họ trân quý.</li>
  <li>Họ kỹ tính nhưng lại là khách hàng cực kỳ trung thành, đôi khi họ thử thách bạn nhưng đó chỉ là họ đang cho bạn những bài học để trưởng thành hơn thôi, bởi vì họ là người luôn thấu hiểu và nghĩ cho mọi người trước quyền lợi của bản thân.</li>
  <li>Chủ đề tâm linh, những bí ẩn của vũ trụ đó có thể là chủ đề họ quan tâm, bạn có thể tìm thấy điểm chung này với họ.</li>
  <li>Hãy cho họ kết quả và lý do đủ lớn, bạn sẽ thuyết phục được họ, đừng nỗ lực thúc giục họ, hãy kiên nhẫn.</li>
  <li>Đôi khi cái tôi của họ cũng rất cao và kỳ vọng quá lớn vào sự hoàn hảo nên thường hay để cơ hội trôi qua.</li>
`,
)
MAPPING.set(
  8,
  `
    <p class="font-bold">Chân dung khách hàng này là nhà kinh doanh, nhà điều hành quyền lực.</p>
    <li>Tiền tài và danh vọng rất quan trọng với họ, họ rất quan tâm đến chất lượng cuộc sống và tài hoa vật chất, có xu hướng tích lũy tài sản, quyền lực.</li>
    <li>Họ định nghĩa thành công qua giá trị vật chất và liên tục phát triển bản thân để lên một vị trí cao hơn.</li>
    <li>Họ là người tham vọng, dám nghĩ, dám làm và rất nhạy bén với những cơ hội kiếm tiền, họ sống thực tế, thành công sớm, hãy chia sẻ với họ về những kết quả hay lợi ích về con số.</li>
    <li>Họ là người rất mục tiêu, chỉ số hành động mạnh mẽ, nhanh, quyết liệt và thiếu kiên nhẫn với những câu chuyện dài dòng. Vì vậy cần đi vào trọng tâm, tác phong chuyên nghiệp, nhanh nhẹn, nhiệt tình nhất có thể.</li>
    <li>Họ yêu thích cái đẹp, độc, lạ, đẳng cấp năm sao, sang chảnh, họ rất quan tâm đến ngoại hình nên bạn hãy chú ý khi gặp họ. Hãy dành cho họ dịch vụ tốt nhất, chọn nơi nói chuyện theo ý thích của họ và giành thật nhiều những lời trân trọng, tán dương, ghi nhận họ với những thành tích của họ.
    <li>Họ là người trung thực, thẳng thắn nhưng đôi khi lời góp ý có thể gây tổn thương cảm xúc của người khác.</li>
    <li>Ở một trạng thái khác họ có thể thực dụng thái quá với tiền bạc, dễ tự ái, dễ đố kỵ với người khác, đôi khi họ thích kiểm soát mọi thứ, nóng vội, bốc đồng hay bắt nạt người khác.</li>
  `,
)
MAPPING.set(
  9,
  `<p class="font-bold">Chân dung khách hàng này là người lãnh tụ, chủ nghĩa nhân đạo.</p>
  <li>Họ giàu tình yêu thương và lòng trắc ẩn, luôn sẵn sàng giúp đỡ người khác, luôn cảm thông với sâu sắc với những hoàn cảnh kém may mắn.</li>
  <li>Sự hào phóng của họ không có giới hạn, bạn cho đi tiền bạc, thời gian, năng lượng và cả trái tim của mình.</li>
  <li>Họ thân thiện, chân thành, tốt bụng, rất nhiều người yêu quý họ.</li>
  <li>Danh vọng, vật chất không phải là điều quá quan trọng với họ hơn nữa, họ thường rất hào phóng và hễ có tiền là họ sẽ sử dụng ngay.</li>
  <li>Họ thích được làm gương và được người khác ngưỡng mộ, hãy thể hiện sự tôn trọng và ngưỡng mộ của bạn.</li>
  <li>Họ dễ cảm xúc, dễ đồng cảm, hào phóng, hiểu biết và có lòng nhân đạo cực cao, đôi khi điều đó khiến họ cả nể khó nói lời từ chối.</li>
  <li>Tầm hiểu biết bao la, nhiệt tình và luôn quan tâm đến vấn đề vĩ mô của xã hội.</li>
  <li>Yêu thương mọi người và muốn được mọi người yêu thương, thích làm việc với người hoặc tổ chức vì cộng đồng và giúp đỡ cộng đồng.</li>
  <li>Họ không màng danh vọng vật chất, rất quảng đại nhưng lại yêu thích những thứ có giá trị cao, tầm nhìn đủ lớn, thích cái mới, …</li>
  <li>Đôi khi họ đặt những trách nhiệm gánh nặng trên vai của mình, khiến họ quá tải và thiếu đi sự tận hưởng cho chính mình.</li>
`,
)

export { MAPPING }
