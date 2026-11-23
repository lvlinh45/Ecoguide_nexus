import type { NexusServiceItem } from "@/types/nexus";

export const NEXUS_SERVICE_CATALOG: NexusServiceItem[] = [
  {
    id: "ytc-video",
    clubModule: "ytc",
    clubLabel: "CLB Truyền Thông YTC",
    logoUrl: "/logo_ytc.jpg",
    category: "video",
    categoryLabel: "Quay & Dựng Video",
    title: "Quay dựng Video Sự kiện, Reels/TikTok & Phim giới thiệu",
    shortDesc:
      "Lên kịch bản, quay phim tại hiện trường và hậu kỳ video recap sự kiện, video ngắn bắt xu hướng hoặc clip giới thiệu sản phẩm/doanh nghiệp.",
    detailDescription:
      "Đội ngũ Media thuộc CLB Truyền thông YTC phụ trách trọn gói từ khâu lên ý tưởng kịch bản quay, chuẩn bị thiết bị quay chống rung/micro thu âm, trực tiếp ghi hình tại địa điểm và dựng hậu kỳ hoàn chỉnh kèm phụ đề, hiệu ứng âm thanh.",
    priceRange: "2,5 – 7 triệu VNĐ / dự án",
    typicalDuration: "Bàn giao bản dựng đầu sau 48–72 giờ",
    deliverables: [
      "Video master Full HD / 4K xuất bản đa nền tảng (ngang 16:9 & dọc 9:16)",
      "01 lượt chỉnh sửa chi tiết theo phản hồi của doanh nghiệp",
      "Bàn giao link lưu trữ Google Drive toàn bộ source & thành phẩm",
    ],
    suitableFor: "Doanh nghiệp F&B, khách sạn, resort, khai trương, sự kiện thương hiệu",
    badge: "YTC · Video",
    accentColor: "#f97316",
    specFields: [
      {
        key: "videoType",
        label: "Cần quay loại video gì?",
        placeholder: "VD: Video recap sự kiện khai trương, Video Reels review món/phòng, Clip giới thiệu doanh nghiệp...",
      },
      {
        key: "videoContent",
        label: "Nội dung, kịch bản & thông điệp mong muốn",
        placeholder: "VD: Quay toàn cảnh check-in, phỏng vấn nhanh 2 khách mời, nổi bật không gian biển...",
        type: "textarea",
      },
      {
        key: "videoQuantity",
        label: "Số lượng & thời lượng dự kiến",
        placeholder: "VD: 01 video recap 2 phút + 02 video Reels dọc 30–45 giây",
      },
    ],
  },
  {
    id: "ytc-design",
    clubModule: "ytc",
    clubLabel: "CLB Truyền Thông YTC",
    logoUrl: "/logo_ytc.jpg",
    category: "design",
    categoryLabel: "Thiết kế Ấn phẩm",
    title: "Thiết kế Poster, Banner, Standee & Bộ ấn phẩm Sự kiện",
    shortDesc:
      "Thiết kế đồng bộ bộ nhận diện trực tuyến và in ấn cho chương trình khuyến mãi, hội thảo, thực đơn, ấn phẩm mạng xã hội.",
    detailDescription:
      "Nhóm Design của CLB Truyền thông YTC nhận thiết kế sáng tạo theo bộ nhận diện thương hiệu có sẵn của doanh nghiệp, tối ưu bố cục cho cả đăng tải mạng xã hội lẫn xuất file in ấn chuẩn CMYK.",
    priceRange: "1,5 – 4,5 triệu VNĐ / gói",
    typicalDuration: "3 – 5 ngày làm việc",
    deliverables: [
      "File thiết kế chuẩn in ấn (PDF/AI) & phiên bản tối ưu đăng social (PNG/JPG)",
      "Tối đa 02 vòng chỉnh sửa chi tiết theo góp ý",
      "Đồng bộ kích thước Facebook, Instagram, Website & Standee",
    ],
    suitableFor: "Nhà hàng, quán cà phê, showroom, chiến dịch truyền thông tháng",
    badge: "YTC · Thiết kế",
    accentColor: "#f97316",
    specFields: [
      {
        key: "designItems",
        label: "Cần thiết kế những hạng mục nào?",
        placeholder: "VD: Backdrop sân khấu, 2 Standee, 5 ảnh bài viết Facebook, Voucher giảm giá...",
      },
      {
        key: "designStyle",
        label: "Phong cách, tông màu & thông điệp chính",
        placeholder: "VD: Tông xanh biển hiện đại, sang trọng, làm nổi bật ưu đãi mùa hè...",
        type: "textarea",
      },
      {
        key: "designCount",
        label: "Số lượng thiết kế & định dạng bàn giao",
        placeholder: "VD: Tổng 8 ấn phẩm kèm file gốc chỉnh sửa",
      },
    ],
  },
  {
    id: "ytc-media",
    clubModule: "ytc",
    clubLabel: "CLB Truyền Thông YTC",
    logoUrl: "/logo_ytc.jpg",
    category: "media",
    categoryLabel: "Truyền thông",
    title: "Chụp ảnh Sự kiện & Hỗ trợ Truyền thông Fanpage",
    shortDesc:
      "Ghi hình khoảnh khắc sự kiện chuyên nghiệp, chỉnh màu nhanh và hỗ trợ viết nội dung truyền thông lan tỏa trên kênh số.",
    detailDescription:
      "Phù hợp cho hội nghị, workshop, giải chạy, hoạt động cộng đồng hoặc chiến dịch quảng bá cần hình ảnh đẹp trả nhanh ngay trong ngày để kịp truyền thông báo chí & mạng xã hội.",
    priceRange: "2 – 6 triệu VNĐ / gói",
    typicalDuration: "Trả ảnh highlight trong 12 giờ, đủ bộ sau 48 giờ",
    deliverables: [
      "15 – 20 ảnh highlight chỉnh màu trả nhanh phục vụ đăng bài ngay",
      "Toàn bộ album ảnh đã hậu kỳ ánh sáng & bố cục",
      "Tùy chọn gói viết caption/bài PR tổng kết sự kiện",
    ],
    suitableFor: "Sự kiện doanh nghiệp, hội thảo, trường học, khu nghỉ dưỡng",
    badge: "YTC · Truyền thông",
    accentColor: "#f97316",
    specFields: [
      {
        key: "mediaEvent",
        label: "Tên / tính chất sự kiện hoặc chiến dịch",
        placeholder: "VD: Hội nghị khách hàng cuối năm, Chiến dịch ra mắt menu mới...",
      },
      {
        key: "mediaGoal",
        label: "Yêu cầu góc chụp, bài đăng & kênh truyền thông",
        placeholder: "VD: Chụp toàn cảnh hội trường, ảnh VIP, 3 bài đăng Fanpage kèm ảnh...",
        type: "textarea",
      },
      {
        key: "mediaVolume",
        label: "Thời lượng tác nghiệp & số lượng ảnh mong muốn",
        placeholder: "VD: 1 buổi sáng (4 tiếng), tối thiểu 120 ảnh chỉnh màu",
      },
    ],
  },
  {
    id: "music-live",
    clubModule: "music",
    clubLabel: "CLB Âm Nhạc",
    logoUrl: "/logo_amnhac.jpg",
    category: "music",
    categoryLabel: "Biểu diễn Âm nhạc",
    title: "Biểu diễn Acoustic, Ban nhạc sống & Tiết mục Nghệ thuật",
    shortDesc:
      "Ban nhạc Acoustic, ca sĩ, hòa tấu nhạc cụ biểu diễn live theo chủ đề cho nhà hàng, khách sạn, khai trương & Gala Dinner.",
    detailDescription:
      "CLB Âm Nhạc (Music Club) tuyển chọn ban nhạc và giọng hát chất lượng, phối khí và luyện tập theo đúng danh sách bài hát/không khí mà doanh nghiệp yêu cầu, có nhân sự dự phòng đảm bảo không trễ lịch.",
    priceRange: "2 – 5 triệu VNĐ / chương trình",
    typicalDuration: "Chuẩn bị tập luyện trước 5 – 7 ngày",
    deliverables: [
      "Ban nhạc Acoustic / đội hình 2 – 5 thành viên (Guitar, Cajon, Keyboard, Vocal...)",
      "Setlist 8 – 15 ca khúc Việt – Anh chọn lọc theo phong cách sự kiện",
      "Có mặt tổng duyệt âm thanh (soundcheck) trước giờ G 60 – 90 phút",
    ],
    suitableFor: "Khách sạn, resort, nhà hàng ven biển, khai trương, tiệc tri ân",
    badge: "Music Club",
    accentColor: "#8b5cf6",
    specFields: [
      {
        key: "musicFormat",
        label: "Hình thức & đội hình biểu diễn mong muốn",
        placeholder: "VD: Ban nhạc Acoustic (Guitar + Cajon + 2 Vocal), Song ca nhẹ nhàng...",
      },
      {
        key: "musicConcept",
        label: "Phong cách nhạc & chủ đề sự kiện",
        placeholder: "VD: Nhạc chill hoàng hôn, nhạc trẻ sôi động khai trương, nhạc song ngữ đón khách...",
        type: "textarea",
      },
      {
        key: "musicSound",
        label: "Thời lượng diễn & tình trạng âm thanh tại địa điểm",
        placeholder: "VD: 2 set x 45 phút; địa điểm đã có sẵn dàn âm thanh & micro",
      },
    ],
  },
  {
    id: "guide-tour",
    clubModule: "guide",
    clubLabel: "CLB Hướng Dẫn Viên",
    logoUrl: "/logo_hdv.jpg",
    category: "guide",
    categoryLabel: "Hướng dẫn Du lịch",
    title: "Thuyết minh Tuyến điểm, Trải nghiệm Văn hóa & Hoạt náo Đoàn",
    shortDesc:
      "Cung cấp nhân sự hướng dẫn, thuyết minh điểm đến Khánh Hòa, hỗ trợ điều phối lịch trình và tổ chức trò chơi teambuilding.",
    detailDescription:
      "CLB Hướng Dẫn Viên Du Lịch (EcoGuide Club) quy tụ sinh viên chuyên ngành Du lịch được đào tạo nghiệp vụ thuyết minh tuyến điểm, xử lý tình huống đoàn khách và dẫn dắt hoạt náo teambuilding chuyên nghiệp.",
    priceRange: "2 – 5 triệu VNĐ / chương trình",
    typicalDuration: "Sẵn sàng triển khai trong 3 – 5 ngày",
    deliverables: [
      "Kịch bản thuyết minh & giới thiệu điểm đến/văn hóa địa phương chuẩn xác",
      "Nhân sự điều phối điểm tập kết, hỗ trợ an toàn & điểm danh đoàn",
      "Trò chơi hoạt náo trên xe hoặc bãi biển giúp gắn kết thành viên",
    ],
    suitableFor: "Công ty lữ hành, khu du lịch, đoàn khách doanh nghiệp, trường học",
    badge: "EcoGuide · HDV",
    accentColor: "#0ea5e9",
    specFields: [
      {
        key: "tourRoute",
        label: "Địa điểm / Tuyến điểm & nội dung thuyết minh",
        placeholder: "VD: City tour Nha Trang (Tháp Bà Ponagar, Hòn Chồng, Viện Hải dương học)...",
      },
      {
        key: "tourProgram",
        label: "Yêu cầu chi tiết hoạt động & hoạt náo",
        placeholder: "VD: Đón đoàn tại sân bay, thuyết minh văn hóa Chăm và tổ chức teambuilding bãi biển...",
        type: "textarea",
      },
      {
        key: "tourScale",
        label: "Số lượng khách & số HDV cần hỗ trợ",
        placeholder: "VD: Đoàn 45 khách người lớn, cần 01 HDV chính + 01 điều phối viên",
      },
    ],
  },
  {
    id: "english-welcome",
    clubModule: "english",
    clubLabel: "CLB Tiếng Anh",
    logoUrl: "/logo_english.jpg",
    category: "english",
    categoryLabel: "Ngoại ngữ & Quốc tế",
    title: "Đón tiếp Khách Quốc tế, MC Song ngữ & Hỗ trợ Giao lưu Văn hóa",
    shortDesc:
      "Nhân sự sinh viên giao tiếp tiếng Anh lưu loát hỗ trợ đón tiếp đoàn khách nước ngoài, dẫn MC song ngữ và biên dịch tài liệu hội thảo.",
    detailDescription:
      "Thành viên nòng cốt của CLB Tiếng Anh đảm nhiệm tiếp đón VIP quốc tế, hướng dẫn check-in đa ngôn ngữ, MC song ngữ Anh – Việt hoặc hỗ trợ dịch đuổi cơ bản tại các sự kiện giao lưu văn hóa & xúc tiến du lịch.",
    priceRange: "1,5 – 4 triệu VNĐ / chương trình",
    typicalDuration: "Chuẩn bị tài liệu trước 3 – 5 ngày",
    deliverables: [
      "Nhân sự giao tiếp tiếng Anh tự tin, tác phong lễ tân chuyên nghiệp",
      "Chuẩn bị kịch bản song ngữ / bảng thuật ngữ chuyên ngành trước sự kiện",
      "Hỗ trợ điều phối hoạt động kết nối giữa khách quốc tế và ban tổ chức",
    ],
    suitableFor: "Khách sạn quốc tế, hội thảo, lễ hội, doanh nghiệp có đối tác nước ngoài",
    badge: "English Club",
    accentColor: "#10b981",
    specFields: [
      {
        key: "englishRole",
        label: "Vị trí hỗ trợ cần thiết",
        placeholder: "VD: Lễ tân đón khách quốc tế, MC song ngữ, Điều phối bàn trải nghiệm...",
      },
      {
        key: "englishTopic",
        label: "Nội dung chương trình & yêu cầu ngôn ngữ",
        placeholder: "VD: Đón đoàn đối tác Singapore, hỗ trợ giới thiệu gian hàng bằng tiếng Anh...",
        type: "textarea",
      },
      {
        key: "englishCount",
        label: "Số lượng nhân sự & ca làm việc",
        placeholder: "VD: 03 sinh viên làm việc trong 1 ngày (08:00 – 17:00)",
      },
    ],
  },
  {
    id: "combo-event",
    clubModule: "multi",
    clubLabel: "Phối hợp Đa CLB qua NEXUS",
    category: "combo",
    categoryLabel: "Gói Kết Hợp Đa CLB",
    title: "Gói Tổ chức Sự kiện Trọn gói (Khai trương / Gala / Giao lưu Quốc tế)",
    shortDesc:
      "Một đầu mối NEXUS điều phối đồng bộ 2 – 4 CLB (Truyền thông YTC + Âm nhạc + HDV + Tiếng Anh) theo kịch bản thống nhất.",
    detailDescription:
      "Giải pháp tối ưu cho sự kiện lớn của doanh nghiệp: thay vì làm việc rời rạc với từng nhóm, NEXUS trực tiếp chuẩn hóa đề bài, điều phối Ban chủ nhiệm các CLB phối hợp theo timeline chung, có giảng viên cố vấn giám sát và hợp đồng ba bên minh bạch.",
    priceRange: "8 – 15 triệu VNĐ / gói",
    typicalDuration: "Triển khai trong 7 – 14 ngày",
    deliverables: [
      "01 điều phối viên NEXUS phụ trách xuyên suốt & hợp đồng ba bên rõ ràng",
      "Kết hợp linh hoạt 2 – 4 CLB theo đúng mục tiêu sự kiện",
      "Timeline chạy chương trình & nghiệm thu từng hạng mục đồng bộ",
    ],
    suitableFor: "Resort, khách sạn, tập đoàn, trung tâm thương mại, sự kiện lớn",
    badge: "Combo 2 – 4 CLB",
    accentColor: "#0f766e",
    specFields: [
      {
        key: "comboClubs",
        label: "Các CLB doanh nghiệp muốn kết hợp",
        placeholder: "VD: Truyền thông YTC (quay chụp) + Âm nhạc (Acoustic) + Tiếng Anh (đón khách VIP)...",
      },
      {
        key: "comboBrief",
        label: "Bối cảnh, mục tiêu & kịch bản tổng thể sự kiện",
        placeholder: "VD: Đêm Gala giao lưu văn hóa & giới thiệu dịch vụ mới cho 120 khách mời...",
        type: "textarea",
      },
      {
        key: "comboScale",
        label: "Địa điểm tổ chức & quy mô khách mời",
        placeholder: "VD: Sảnh sự kiện khách sạn tại Nha Trang, khoảng 120 khách",
      },
    ],
  },
  {
    id: "custom-other",
    clubModule: "other",
    clubLabel: "NEXUS Tư vấn & Kết nối",
    category: "other",
    categoryLabel: "Dịch vụ Khác",
    title: "Yêu cầu Dịch vụ Khác hoặc Hợp tác Dài hạn theo Đề bài riêng",
    shortDesc:
      "Doanh nghiệp có nhu cầu đặc thù ngoài các gói trên? Gửi mô tả công việc để NEXUS trao đổi và tìm CLB phù hợp nhất.",
    detailDescription:
      "Dành cho các dự án CSR cộng đồng, khảo sát thị trường du lịch, sản xuất chuỗi nội dung nhiều tháng hoặc hợp tác tuyển dụng thực tập sinh sớm cùng hệ sinh thái các CLB sinh viên Đại học Nha Trang.",
    priceRange: "Thỏa thuận theo đề bài",
    typicalDuration: "Phản hồi tư vấn trong < 24 giờ",
    deliverables: [
      "Buổi trao đổi làm rõ nhu cầu 1-1 cùng điều phối viên NEXUS",
      "Đề xuất 1 – 3 CLB có năng lực phù hợp kèm bảng chi phí & tiến độ dự kiến",
      "Hợp đồng hợp tác linh hoạt theo dự án hoặc theo quý/năm",
    ],
    suitableFor: "Mọi doanh nghiệp SME, tổ chức, đơn vị tuyển dụng & truyền thông",
    badge: "Theo yêu cầu",
    accentColor: "#334155",
    specFields: [
      {
        key: "customNeed",
        label: "Loại dịch vụ hoặc vấn đề doanh nghiệp đang cần hỗ trợ",
        placeholder: "VD: Cần đội khảo sát du khách, hỗ trợ vận hành sự kiện cộng đồng hàng quý...",
      },
      {
        key: "customDeliverable",
        label: "Yêu cầu đầu ra & tiêu chí nghiệm thu mong muốn",
        placeholder: "Mô tả ngắn kết quả cần bàn giao sau khi hoàn thành...",
        type: "textarea",
      },
      {
        key: "customScale",
        label: "Quy mô nhân sự hoặc tần suất dự kiến",
        placeholder: "VD: 5 sinh viên làm việc cuối tuần trong 1 tháng",
      },
    ],
  },
];
