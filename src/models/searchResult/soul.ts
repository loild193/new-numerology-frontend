/* eslint-disable max-len */
const MAPPING = new Map<number, string>()

MAPPING.set(
  1,
  `<li>Họ muốn người khác tôn trọng, thể hiện được lòng tự tôn.</li>
  <li>Họ thích cảm giác chiến thắng và giành chiến thắng mang tính cá nhân, thích được sự tự do và tự ra quyết định.</li>
  <li>Họ thích khẳng định bản thân và định vị nhân dạng cá nhân của mình.</li>
  => Lời khuyên
  <li>Hãy dành cho khách hàng của mình sự tôn trọng và ghi nhận tối đa.</li>
  <li>Tác phong chuyên nghiệp, truyền đạt ngắn gọn, đi thẳng vào vấn đề.</li>
  <li>Họ thích nghe những điều độc đáo, độc nhất, đột phá, khác biệt.</li>
  <li>Họ thích là người đặc biệt và có đặc quyền hơn người khác (VIP).</li>
  <li>Họ là người cương quyết, quyết tâm cao và ra quyết định rất nhanh, tuyệt đối không áp đặt mà hãy để khách hàng tự ra quyết định.</li>
  Từ khóa dành cho khách hàng này là cảm xúc, chiến thắng và là người đặc biệt.

`,
)
MAPPING.set(
  2,
  `<li>Họ cực kỳ quan tâm đến việc cống hiến cho cộng đồng: vì vậy hãy cho họ biết hành động này sẽ mang lại giá trị gì cho mọi người, cho xã hội.</li>
  <li>Trong mối quan hệ và tình yêu: hãy nhẹ nhàng, nhiệt tình thể hiện sự quan tâm, yêu thương của bạn, kết nối và tìm điểm tương đồng, hòa hợp với họ.</li>
  <li>Họ cần được công nhận: vì vậy hãy tôn trọng và thừa nhận, đặc biệt là ghi nhận trực giác và cảm xúc của họ</li>
  <li>Họ cũng thích nói về những ý tưởng và các khái niệm trừu tượng thuộc phạm trù tâm linh.</li>
  => Lời khuyên
  <li>Đây là người ra quyết định mua hàng bằng cảm xúc vì vây bạn cần lấy được cảm tình của họ.</li>
  <li>Tác phong nhẹ nhàng, ân cần, chu đáo, tinh tế.</li>
  <li>Họ thích nghe những lời ngọt ngào, yêu thương.</li>
  <li>Họ thường cả nể và thường do dự khi ra quyết định vì vậy bạn hoàn toàn có thể giúp khách hàng lựa chọn một cách tối ưu.</li>
  Từ khóa dành cho vị khách hàng này là tình cảm yêu thương, đồng cảm, nhẹ nhàng, hòa bình, cộng đồng, cả nể.
`,
)
MAPPING.set(
  3,
  `<li>Họ cực kỳ quan tâm đến việc được công nhận từ mọi người Vì vậy hãy dành cho họ những lời khen ngợi, tán dương, tôn trọng và thừa nhận tối đa, đặc biệt là ghi nhận những điểm nổi bật, cống hiến của họ.</li>
  <li>Hãy vui vẻ, niềm nở, nhiệt tình thể hiện sự quan tâm của bạn, luôn tạo không khí vui vẻ, tích cực, quan trọng trong mọi hoàn cảnh.</li>
  <li>Họ rất quan tâm đến chương trình khuyến mãi: vì vậy hãy cho họ biết việc đưa ra quyết định ngay hôm nay mang lại lợi ích về tài chính cho họ như thế nào.</li>
  <li>Họ cũng rất thích được thể hiện bản thân, thích được góp ý cho mọi người và người đó làm theo, vì vậy hãy cởi mở để xin những ý kiến của họ, hãy lắng nghe và tán dương về điều đó.</li>
  => Lời khuyên:
  <li>Đây là người có quyết định mua hàng bằng cảm xúc, đôi khi khá bốc đồng vì vậy cần lấy được cảm tình và đẩy cảm xúc lên cao trào.</li>
  <li>Họ rất thích nghe những lời khen ngợi.</li>
  <li>Tác phong nhanh nhẹn, niềm nở, vui vẻ, tươi cười.</li>
  <li>Họ thích nghe những điều độc đáo, độc nhất, đột phá, khác biệt.</li>
  <li>Họ thích là người đặc biệt và có những đặc quyền hơn người khác.</li>
  Từ khóa dành cho vị khách hàng này là khen ngợi, tán dương, vui vẻ, tích cực.</li>
`,
)
MAPPING.set(
  4,
  `<li>Họ là người cực kỳ an toàn và nguyên tắc, vì vậy hãy kiên nhẫn để cung cấp các thông tin cần thiết cho họ, vì họ rất kỹ tính và lý trí, hãy tập trung vào những thông số quan trọng của sản phẩm, công năng sử dụng, hạn sử dụng…họ thích nghe con số hơn là văn kể chuyện, họ thích tận mắt nhìn thấy những bằng chứng và có cơ sở hơn là chỉ miêu tả.</li>
  <li>Họ cần được công nhận, vì vậy hãy tôn trọng và thừa nhận, đặc biệt là những kiến thức và nhận định của họ.</li>
  <li>Họ rất quan tâm đến việc cống hiến cho cộng đồng, vì vậy hãy cho họ biết hành động này sẽ mang lại giá trị gì cho việc bảo vệ môi trường, cho mọi người và cho xã hội.</li>
  <li>Họ quan tâm đến mối quan hệ và tình yêu, vì vậy hãy cho họ biết sản phẩm này mang lại giá trị cho những người thân yêu của họ như thế nào: Cha, mẹ, vợ, chồng, con cái,...</li>
  => Lời khuyên:
  <li>Đây là người quyết định mua hàng bằng lý trí và cùng là một trong những nhóm khách hàng cực kỳ khó tính, tuy nhiên nếu bạn đã bán được hàng cho họ thì bạn có thể bán hàng được cho mọi khách hàng khác. Và đây cũng là nhóm khách hàng trung thành nhất.</li>
  <li>Tác phong chuyên nghiệp, truyền đạt ngắn gọn, cần có cơ sở rõ ràng.</li>
  <li>Hãy dành cho khách hàng của mình sự tôn trọng và kiên nhẫn, không vội vàng.</li>
  <li>Họ thích được tự lựa chọn và tự ra quyết định khi mọi vấn đề được làm rõ ràng, kỹ lưỡng. Vì vậy đừng bao giờ áp đặt, đừng bắt họ phải ra quyết định ngay.</li>
  <li>Luôn tạo cảm giác an toàn, mọi thứ đều trong tầm kiểm soát của họ.</li>
  Từ khóa dành cho vị khách hàng này là niềm tin, an toàn, công nhận.</li>
`,
)
MAPPING.set(
  5,
  `<li>Họ rất quan tâm đến việc phát triển bản thân: Được trải nghiệm những điều mới mẻ, được khám phá những thứ lạ lẫm, được hưởng thụ những thứ đẳng cấp, độc đáo. Vì vậy hãy cho họ biết về sự mới - độc – lạ của sản phẩm, dịch vụ này như thế nào và chắc chắn họ sẽ không nỡ từ chối mà sẵn sàng thử cho họ biết.</li>
  <li>Họ rất quan tâm đến việc cống hiến cho cộng đồng, vì vậy hãy cho họ biết hành động này sẽ mang lại giá trị gì cho mọi người và cho xã hội, cho cộng đồng, cho đất nước, vì họ cũng là người đặc biệt yêu nước.</li>
  <li>Hãy vui vẻ, niềm nở, nhiệt tình thể hiện sự quan tâm của bạn. Luôn tạo không khí vui vẻ, tích cực, lạc quan trong mọi hoàn cảnh.</li>
  <li>Họ cực kỳ quan tâm đến việc công nhận từ mọi người, vì vậy hãy dành cho họ những lời khen ngợi, tán dương, tôn trọng và thừa nhân tối đa, đặc biệt là ghi nhận những điểm khác biệt, độc đáo và sáng tạo của họ.</li>
  <li>Họ cũng rất thích thể hiện bản thân, thích được góp ý cho mọi người và người đó làm theo, vì vậy hãy cởi mở để xin những ý kiến của họ hãy lắng nghe và tán dương về điều đó.</li>
  => Lời khuyên:
  <li>Đây là người ra quyết định mua hàng bằng cảm xúc, đôi khi khá bốc đồng vì vậy cần lấy được cảm tình và đẩy cảm xúc lên cao trào </li>
  <li>Họ thích nghe những điều độc đáo, độc nhất, đột phá, khác biệt, mới mẻ.</li>
  <li>Họ thích là người đặc biệt và có những đặc quyền hơn người khác.</li>
  <li>Tác phong nhanh nhẹn, chuyên nghiệp, nhiệt tình, niềm nở, vui vẻ.</li>
  <li>Đừng quên ghi nhận và tri ân về sự hào phóng và quân tử của họ.</li>
  Từ khóa dành cho vị khách hàng này là mới, độc, lạ.</li>
`,
)
MAPPING.set(
  6,
  `<li>Lòng trắc ẩn là tử huyệt cảm xúc mạnh mẽ nhất của người này và họ đặc biệt khao khát được giúp đỡ mọi người.</li>
  <li>Họ rất mong muốn được tri ân và ghi nhận lòng tốt vì vậy hãy tôn trọng, ghi nhận, tri ân về giá trị họ mang lại cho bạn.</li>
  <li>Họ cực kỳ quan tâm đến gia đình, con cái, những người thân yêu, phụng dưỡng, hiếu nghĩa với cha mẹ, ông bà.</li>
  <li>Họ muốn mang lại hạnh phúc và nhìn thấy những người xung quanh sống chan hòa, yêu thương.</li>
  => Lời khuyên:
  <li>Đây là người ra quyết định mua hàng bằng cảm xúc, đặc biệt là giàu lòng trắc ẩn, vì vậy bạn cần cho họ biết hành động này của bạn sẽ giúp đỡ người thân yêu của họ, giúp đỡ chính bạn, giúp đỡ bất kỳ ai đó to lớn như thế nào.</li>
  <li>Tác phong nhiệt tình, ân cần, chu đáo, tinh tế, trách nhiệm.</li>
  <li>Hãy nói những lời tình cảm, yêu thương.</li>
  <li>Hãy giúp khách hàng lựa chọn giải pháp cách tối ưu vì khách hàng này thường cả nể và thường do dự khi ra quyết định.</li>
  <li>Đừng quên kiên nhẫn và tri ân về sự giúp đỡ hoặc nỗ lực của họ.</li>
  Từ khóa dành cho vị khách hàng này là lòng trắc ẩn, thích giúp đỡ, trách nhiệm.</li>
`,
)
MAPPING.set(
  7,
  `<li>Họ là người cực kỳ an toàn và rất kỹ tính, vì vậy hãy kiên nhẫn để cung cấp các thông tin cần thiết cho họ.</li>
  <li>Họ rất lý trí, hãy tập trung vào những thông số quan trọng của sản phẩm, lợi ích mang lại, kết quả đạt được, mục tiêu, nguồn gốc xuất xứ, chất lượng sản phẩm, công năng sử dụng, hạn sử dụng.</li>
  <li>Họ thích nghi con số hơn là văn kể chuyện, họ thích tận mắt nhìn thấy những bằng chứng và có cơ sở hơn là chỉ miêu tả, đặc biệt họ luôn quan tâm đến tính khả thi hoặc hành trình đặt mục tiêu hơn là mục tiêu.</li>
  <li>Họ rất quan tâm đến việc phát triển bản thân, được học thêm những kiến thức mới, đặc biệt họ tìm được triết lý cho bản thân nhằm trả lời các câu hỏi lớn trong đầu để giải thích mọi thứ hoặc tìm ra nguyên lý của sự việc và được đáp ứng những câu hỏi tại sao.</li>
  <li>Họ cần được công nhận vì vậy hãy tôn trọng và thừa nhận, đặc biệt là những kiến thức và trí tuệ của họ về những triết lý, chân lý hoặc quy luật mà họ đúc kết được.</li>
  => Lời khuyên:
  <li>Đây là người ra quyết định mua hàng bằng lý trí và cũng là một trong những nhóm khách hàng cực kỳ khó tính. Tuy nhiên nếu bạn đã bán được hàng cho họ thì bạn có thể bán hàng cho mọi khách hàng khác và đây cũng là nhóm khách hàng trung thành nhất. </li>
  <li>Luôn tạo cảm giác an toàn, mọi thứ đều phải nằm trong tầm kiểm soát của họ và giúp họ giải đáp được tất cả những câu hỏi tại sao. </li>
  <li>Họ thích được tự lựa chọn và tự đưa ra quyết định sau khi mọi vấn đề được làm rõ ràng, kỹ lưỡng vì vậy đừng bao giờ áp đặt, đừng bắt họ phải ra quyết định ngay. </li>
  <li>Tác phong chuyên nghiệp, truyền đạt ngắn gọn, cần có bằng chứng rõ ràng.</li>
  <li>Hãy dành cho khách hàng của mình sự tôn trọng và kiên nhẫn, không vội vàng.</li>
  Từ khóa dành cho vị khách hàng này là tôn trọng, sự thật và chân lý.</li>
`,
)
MAPPING.set(
  8,
  `<li>Họ cực kỳ quan tâm đến việc được công nhận về thành tựu và sự thành công.</li>
  <li>Họ khao khát chất lượng cuộc sống cao, đẳng cấp, sang trọng.</li>
  <li>Họ thích tự lựa chọn và tự ra quyết định.</li>
  <li>Họ thích được nói thẳng thắn về sự thật.</li>
  => Lời khuyên:
  <li>Đây là người quyết định mua hàng bằng cảm xúc, đôi khi khá bất đồng vì vậy cần được lấy cảm tình và đẩy cảm xúc lên cao trào.</li>
  <li>Cho họ biết sản phẩm này mang lại sự đẳng cấp, sang trọng, tiện nghi như thế nào.</li>
  <li>Hãy dành cho khách hàng của mình sự tôn trọng và khâm phục tối đa.</li>
  <li>Họ thích nghe những điều độc đáo độc nhất, đột phá, khác biệt, mới mẻ, đẳng cấp, sang trọng, tiện nghi.</li>
  <li>Họ thích là người đặc biệt và có những đặc quyền hơn người khác.</li>
  <li>Tác phong nhanh nhẹn, chuyên nghiệp, nhiệt tình, niềm nở, vui vẻ.</li>
  <li>Đừng quên ghi nhận và tri ân về sự hào phóng và quân tử của họ.</li>
  <li>Họ là người cương quyết, quyết tâm cao và ra quyết định rất nhanh.</li>
  <li>Họ là người rất trọng chữ tín, lời nói là chữ ký. Vì vậy hãy thật trách nhiệm với từng lời nói của mình.</li>
  Từ khóa dành cho vị khách này là lòng tự trọng, quân tử, hào phóng, trọng chữ tín, đẳng cấp.</li>
`,
)
MAPPING.set(
  9,
  `<li>Họ cực kỳ quan tâm đến việc cống hiến cho cộng đồng vì vậy hãy cho họ biết hành động này sẽ mang lại giá trị gì cho mọi người, cho xã hội, họ luôn sẵn sàng cống hiến cho cộng đồng.</li>
  <li>Lòng trắc ẩn là tử huyệt cảm xúc mạnh mẽ nhất của người này và họ khao khát được giúp đỡ mọi người vì vậy hãy cho họ biết hành động này của họ sẽ giúp đỡ người thân yêu của họ, giúp đỡ chính bạn, giúp đỡ bất kỳ ai đó to lớn như thế nào.</li>
  <li>Họ rất mong muốn được công nhận, đặc biệt họ khao khát được làm gương cho người khác noi theo vì vậy hãy tôn trọng họ và đừng quên ghi nhận, tri ân về giá trị họ mang lại cho bạn.</li>
  <li>Họ rất quan tâm đến các chương trình khuyến mãi vì vậy hãy cho họ biết việc ra quyết định ngay hôm nay mang lại lợi ích về tài chính cho họ như thế nào.</li>

  => Lời khuyên:
  <li>Đây là người tra quyết định mua hàng bằng cảm xúc đặc biệt là giàu lòng trắc ẩn và cực kỳ hào phóng, bạn cần lấy được tình cảm của họ.</li>
  <li>Tác phong vui vẻ, nhiệt tình, ân cần, chu đáo, tinh tế, trách nhiệm.</li>
  <li>Họ thích nghe những lời tình cảm, yêu thương.</li>
  <li>Họ thường cả nể và thường do dự khi ra quyết định, vì vậy bạn hoàn toàn có thể giúp khách hàng lựa chọn một cách tối ưu.</li>
  <li>Đừng quên kiên nhẫn và tri ân về sự giúp đỡ hoặc những nỗ lực của họ.</li>
  Từ khóa dành cho Vị Khách này là lòng trắc ẩn, hào phóng, trách nhiệm, cả nể.</li>
`,
)

export { MAPPING }
