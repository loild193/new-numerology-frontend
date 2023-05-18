/* eslint-disable max-len */
const MAPPING = new Map<number, string>()

MAPPING.set(
  1,
  `<li>Đây là tuýp người ra quyết định rất nhanh, quyết đoán. Hãy khẳng định bạn đang trao cơ hội cho họ và có giá trị khi chia sẻ về cơ hội hay sản phẩm của bạn.</li>
  <li>Họ là người thích cái đẹp và ưa nhìn, dễ mến Vì vậy hãy dùng những lời lẽ tích cực và dành những lời khen tôn vinh cho họ.</li>
  <li>Thích nghe về sự sáng tạo, thích những ý tưởng mới, hãy chia sẻ ngắn gọn về ưu điểm và sự độc đáo nổi trội của sản phẩm của bạn.</li>
  <li>Họ tự tin, tự chủ và rất mạnh mẽ, vì vậy hãy đề cao về khả năng đó của họ.</li>
  <li>Nỗ lực tạo không gian và không khí thoải mái nhất cho họ, đặc biệt nếu gặp trực tiếp hãy chú ý về không gian, không nên gò bó quá, nhưng phải thể hiện được sự chuyên nghiệp.</li>
  <li>Thích mặc quần áo hàng hiệu và tạo ra phong cách thời trang riêng của mình. Họ là người thích sự đẳng cấp, hãy chia sẻ về lý do tại sao sản phẩm của mình chỉ dành riêng cho họ, hãy ăn mặc sao cho tương xứng với họ vì đây là điều họ rất chú ý.</li>
  <li>Không thích làm chi tiết, đôi khi sẽ hơi khó chịu, nóng tính và cố chấp.</li>
  `,
)
MAPPING.set(
  2,
  `<li>Hãy tiếp cận từ từ vì đây là người thích nhẹ nhàng, những ngôn ngữ lịch sự và được quan tâm.</li>
  <li>Có xu hướng bao bọc người khác, nhẹ nhàng và tốt bụng.</li>
  <li>Dễ xúc động, dễ chịu và hay quan tâm đến người khác.</li>
  <li>Chỉnh chu và gọn gàng, hãy chuẩn bị không gian, tác phong và phong cách ăn mặc sao cho tương xứng để lấy được sự tin tưởng từ họ.</li>
  <li>Họ là người dễ gần, rất hợp tác và hài hòa. Hãy tôn trọng và yêu quý họ tối đa (họ dễ gần không đồng nghĩa với dễ dãi).</li>
  <li>Họ rất khiêm tốn và đôi khi không thể hiện ra bên ngoài nhưng lại là người rất tài giỏi.</li>
  <li>Có xu hướng và phong cách nghệ thuật nên hãy chú ý đến sự đẹp, mới và những ưu ái của bạn hoặc doanh nghiệp bạn dành cho họ nhé.</li>
  <li>Được người khác giới coi là bạn đồng hành tốt.</li>
  <li>Họ có khả năng kiên nhẫn, lắng nghe và đánh giá tình hình, đôi khi ngại đưa ra quan điểm ngay khi mới gặp, hãy tạo không khí và ngôn từ gần gũi và khuyến khích họ chia sẻ về quan điểm cũng như sản phẩm mà bạn đang trao cho họ.</li>
  <li>Họ không thích tranh cãi và đối đầu nên nếu không thấy thỏa mãn hay phù hợp sẽ chủ động rút lui.</li>
`,
)
MAPPING.set(
  3,
  `<li>Hãy đi thẳng vào vấn đề và khẳng định ngay vào lợi ích cơ hội. Họ thích nghe những lời giới thiệu hóm hỉnh sáng tạo, hãy giới thiệu rõ rang, ngắn gọn và xúc tích.</li>
  <li>Họ rất vui vẻ nên hãy tạo không khí tích cực, cởi mở và thân thiện.</li>
  <li>Hãy chia sẻ về lợi ích tính năng và kết quả những điều khác biệt và tích cực của sản phẩm hay dịch vụ của bạn, tránh dài dòng, rườm rà.</li>
  <li>Thích những bữa tiệc và không gian mở, đẹp, sang trọng.</li>
  <li>Hướng ngoại và hòa đồng, thích được là trung tâm của mọi vấn đề.</li>
  <li>Ngoại hình hấp dẫn, quyến rũ.</li>
  <li>Họ là người nhiều tài năng, đặc biệt là ngôn ngữ nói nên hãy dành lời khen có cánh vì điều này.</li>
  <li>Sau khi giới thiệu hãy cho họ chia sẻ về quan điểm và bản thân họ.</li>
  <li>Có thể hay chỉ trích, đố kỵ và không có sự kiên nhẫn quá lâu.</li>
  <li>Đôi khi thiếu sự chăm chỉ và kỷ luật.</li>
`,
)
MAPPING.set(
  4,
  `<li>Đây là tuýp người thực tế và rất thích nghe về những chi tiết, sự tỉ mỉ.</li>
  <li>Hãy chia sẻ với khách hàng về những thành tích đã đạt được, quá trình thực hiện sản phẩm và doanh nghiệp của bạn, lưu ý là có dữ liệu và con số đi kèm.</li>
  <li>Là người có trách nhiệm trong mọi việc, thích nghe về kế hoạch hành động chi tiết và tầm nhìn.</li>
  <li>Ngoài việc nói về đẹp, giá, hãy tập trung vào chất lượng, sự bền bỉ và sự phù hợp</li>
  <li>Rất chỉnh chu trong cách ăn mặc cũng như công việc nên việc tiếp cận hay gặp mặt bạn cần có sự chuẩn bị kỹ lưỡng, trang phục, ăn nói, các công cụ, dụng cụ cho việc bán sản phẩm.</li>
  <li>Khách hàng rất tuân thủ nguyên tắc, luật pháp nên đừng làm điều gì vượt giới hạn khiến khách hàng bất an.</li>
  <li>Rất coi trọng gia đình và luôn có mong muốn bảo vệ những người thân yêu, hãy khai thác tối đa yếu tố này đem lại lợi ích gì cho người thân và gia đình trong sản phẩm bạn đang bán.</li>
  <li>Hãy chia sẻ về sự tiết kiệm và thời gian, tiền bạc, công sức, cơ hội vì đó là điều họ rất muốn nghe.</li>
  <li>Thích những công ty, sản phẩm có đóng góp nhiều cho xã hội vì vậy nếu có hãy chia sẻ về điều này.</li>
  <li>Nhút nhát hoặc nhiều lúc quá khắt khe nên hãy từ từ tiếp cận.</li>
  <li>Đôi khi rất khó để tận hưởng những thứ xa hoa và phù phiếm.</li>
`,
)
MAPPING.set(
  5,
  `<li>Đây là tuýp người có cảm xúc cao, thích được khen và nghe những điều tích cực.</li>
  <li>Hãy dùng những lời nói hóm hỉnh, vui tươi, hãy trình bày ngắn gọn, xúc tích vào vấn đề cùng lợi ích và những ưu điểm nổi trội của sản phẩm, không nói quá dài dòng và quá chi tiết.</li>
  <li>Họ là những người bán hàng rất giỏi nên cũng sẽ là người mua hàng tuyệt vời Hãy thân thiện, chân thành và nỗ lực tạo thiện cảm thay vì quá tập trung nói về sản phẩm.</li>
  <li>Thích nghe về sự sáng tạo và đa dạng của sản phẩm.</li>
  <li>Tự do lựa chọn là ưu tiên số 1.</li>
  <li>Ăn mặc chỉnh chu và màu sắc tươi sáng sẽ dễ nhận được sự thiện cảm</li>
  <li>Có tính phóng khoáng. Hãy dành những cụm từ đặc biệt, ưu tiên khi nói chuyện với khách hàng này.</li>
  <li>Họ gợi cảm bề ngoài, thu hút người khác và thích những người giống họ.</li>
  `,
)
MAPPING.set(
  6,
  `<li>Hãy thể hiện bạn và doanh nghiệp của bạn là đơn vị đáng tin cậy có trách nhiệm với khách hang. Hãy chia sẻ về quá trình và đóng góp cho cộng đồng (nếu có).</li>
  <li>Họ là những người rất có hiếu và đề cao lợi ích sự an toàn của người thân hơn là bản than. Hãy đưa ra những lợi ích trực tiếp kèm theo lợi ích cho gia đình của khách hàng vì đó là điều họ cũng rất quan tâm.</li>
  <li>Họ thích người khác lắng nghe, thích được tâm sự.</li>
  <li>Hãy chân thành và thể hiện sự quan tâm đến người khác của bạn vì điều đó rất dễ có sự đồng cảm từ khách hàng.</li>
  <li>Họ rất quan tâm đến sức khỏe, ăn uống và điều kiện sống.</li>
  <li>Chấp nhận phần thiệt về mình và hi sinh bản thân.</li>
  <li>Thích tư vấn và giải quyết vấn đề cho người khác.</li>
  <li>Có khiếu nghệ thuật và thích những sản phẩm đẹp, sáng tạo và cá tính, tính nghệ thuật cao </li>
  <li>Thông cảm và giàu lòng trắc ẩn,</li>
  <li>Đôi khi khách hàng sẽ hơi tự mãn, cố chấp và cho mình là đúng.</li>
  `,
)
MAPPING.set(
  7,
  `<li>Hãy chuẩn bị tâm thế và kiến thức về sản phẩm thật tốt nhé vì đây là khách hàng có khả năng phân tích và quan sát rất tốt.</li>
  <li>Bạn hãy chỉnh chuẩn từ trong trang phục, chuẩn mực trong lời nói.</li>
  <li>Hãy luôn chân thật và tạo cảm giác an toàn từ sản phẩm doanh nghiệp.</li>
  <li>Ban đầu tiếp cận sẽ hơi khó khăn vì họ là người khá dày dặn, xa cách. Hãy bình tĩnh lắng nghe và trình bày về lợi ích, tính năng, sự chi tiết có trọng tâm, không quá dài dòng.</li>
  <li>Người này sống nội tâm, dính mắt những điều diễn ra trong quá khứ.</li>
  <li>Thích sự riêng tư, yêu thiên nhiên nên hãy chú ý về không gian khi tiếp cận.</li>
  <li>Sự có chiều sâu và phẩm chất sẽ thu hút người này.</li>
  <li>Thích sự chi tiết và tỉ mỉ, hay đắm chìm trong suy nghĩ nên hãy kiên nhẫn và hãy thể hiện mình là một chuyên gia nhé.</li>
  <li>Có sở thích khác thường, thậm chí lập dị, đôi lúc không hòa đồng.</li>
  <li>Ban đầu khó gần nên hãy cho họ thời gian để gần gũi và cởi mở theo thời gian.</li>
  <li>Thần bí, thích triết học và tâm linh.</li>
  <li>Có thể là người đối ngoại giỏi.</li>
  `,
)
MAPPING.set(
  8,
  `<li>Thích sang trọng, quyền uy, đẳng cấp, giá trị lớn vì họ quan tâm đặc biệt đến điều này.</li>
  <li>Tham vọng và thích quyền lực, chế độ riêng, phong cách riêng đặc biệt.</li>
  <li>Tự tin, quyết đoán, có năng lực và năng lượng cao.</li>
  <li>Quan tâm đến vẻ bề ngoài, thích những cụm từ đẳng cấp, sang trọng, lộng lẫy.</li>
  <li>Thích nghe về cơ hội, đặc biệt là cơ hội kinh doanh và dẫn đầu.</li>
  <li>Xuất hiện là người có uy quyền, thích kiểm soát.</li>
  <li>Mặc quần áo và phụ kiện đắt tiền.</li>
  <li>Có đầu óc kinh doanh nhìn xa trong rộng.</li>
  <li>Có tổ chức, nhanh nhạy với cơ hội kiếm tiền.</li>
`,
)
MAPPING.set(
  9,
  `<li>Thích nghe về những điều lớn lao, những giá trị xã hội và thích những điều làm mọi người hạnh phúc.</li>
  <li>Thích nghe những cụm từ phung sự cộng đồng, giá trị lâu dài, giá trị xã hội nhân loại.</li>
  <li>Là người hướng ngoại và lịch sự, có khiếu nghệ thuật và thường cả tin nên với họ niềm tin là điều rất quan trọng.</li>
  <li>Có lòng trắc ẩn nên luôn bao dung, nhân ái và hiểu được nỗi khổ của mọi người.</li>
  <li>Rất dễ xúc động, ấm áp, tốt bụng và chu đáo hi sinh vì người khác.</li>
  <li>Thích nói chuyện về tâm linh, duy tâm và sống tình cảm.</li>
  <li>Không thể đưa ra quyết định nhanh chóng nên hãy kiên nhẫn.</li>
  <li>Được người khác yêu quý và tôn trọng.</li>
  <li>Hay gặp may mắn, ngoài ra họ cũng rất dễ bị tổn thương.</li>
`,
)

export { MAPPING }
