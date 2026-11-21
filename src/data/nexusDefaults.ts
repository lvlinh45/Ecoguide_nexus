import type {
  ComparisonRow,
  FaqItem,
  NexusPortalConfig,
  ProcessStep,
  ServicePackageItem,
} from "@/types/nexus";

export const DEFAULT_NEXUS_CONFIG: NexusPortalConfig = {
  brandName: "NEXUS",
  ecosystemBadge: "Một hệ sinh thái – Nhiều tài năng",
  slogan: "Kết nối đam mê – Khai phóng tài năng – Kiến tạo giá trị",
  heroTitle:
    "Cầu nối Doanh nghiệp Khánh Hòa & Mạng lưới CLB Sinh viên Đại học Nha Trang",
  heroSubtitle:
    "NEXUS số hóa thế mạnh của từng câu lạc bộ sinh viên thành dịch vụ chuyên nghiệp — có hồ sơ năng lực số, hợp đồng ba bên, giảng viên cố vấn và quy trình nghiệm thu rõ ràng.",
  contactEmail: "nexus@ecoguide.vn",
  contactPhone: "0905 123 456",
  contactAddress: "02 Nguyễn Đình Chiểu, Vĩnh Thọ, Nha Trang, Khánh Hòa",
  ctaLink: "mailto:nexus@ecoguide.vn?subject=Lien%20he%20hop%20tac%20NEXUS",
  projects: [
    {
      id: "guide",
      name: "CLB Hướng Dẫn Viên",
      shortName: "EcoGuide Club",
      category: "Du lịch & Văn hóa",
      url: import.meta.env.VITE_GUIDE_URL || "https://clb.ecoguide.vn",
      logoUrl: "/logo_hdv.jpg",
      tagline:
        "Thuyết minh tuyến điểm, trải nghiệm văn hóa & điều phối tham quan",
      description:
        "Khai thác năng lực chuyên môn du lịch để hỗ trợ hoạt động tham quan, giới thiệu điểm đến, thuyết minh, trải nghiệm văn hóa và tổ chức chương trình du lịch bài bản.",
      priceRange: "2 – 5 triệu VNĐ / chương trình",
      accentColor: "#0ea5e9",
      badge: "Nòng cốt #1",
      highlights: [
        "Thuyết minh điểm đến & trải nghiệm văn hóa địa phương",
        "Hỗ trợ điều phối đoàn khách & hoạt náo teambuilding",
        "Nhân sự được đào tạo nghiệp vụ, tác phong thực chiến",
      ],
      isActive: true,
      order: 1,
    },
    {
      id: "ytc",
      name: "CLB Truyền Thông YTC",
      shortName: "YTC Media",
      category: "Truyền thông & Sáng tạo",
      url: import.meta.env.VITE_YTC_URL || "https://ytc.ecoguide.vn",
      tagline:
        "Chụp ảnh, quay phim, thiết kế ấn phẩm & sản xuất video ngắn",
      description:
        "Cung cấp giải pháp sáng tạo nội dung đa nền tảng: chụp ảnh, quay dựng video ngắn, thiết kế bộ nhận diện và quản trị chiến dịch truyền thông sự kiện cho doanh nghiệp.",
      priceRange: "3 – 8 triệu VNĐ / gói",
      accentColor: "#f97316",
      badge: "Nòng cốt #2",
      highlights: [
        "Chụp ảnh, quay phim & dựng video ngắn (Reels/TikTok)",
        "Thiết kế ấn phẩm truyền thông & bộ nhận diện",
        "Truyền thông sự kiện & quản trị nội dung mạng xã hội",
      ],
      isActive: true,
      order: 2,
    },
    {
      id: "music",
      name: "CLB Âm Nhạc",
      shortName: "Music Club",
      category: "Nghệ thuật & Sự kiện",
      url: import.meta.env.VITE_MUSIC_URL || "https://music.ecoguide.vn",
      tagline: "Biểu diễn Acoustic, ban nhạc & tiết mục nghệ thuật sự kiện",
      description:
        "Cung cấp các chương trình biểu diễn nghệ thuật, đêm nhạc Acoustic, ban nhạc sống, tiết mục văn nghệ cho sự kiện doanh nghiệp, nhà hàng, khách sạn và khu nghỉ dưỡng.",
      priceRange: "2 – 5 triệu VNĐ / chương trình",
      accentColor: "#8b5cf6",
      badge: "Nòng cốt #3",
      highlights: [
        "Ban nhạc Acoustic & biểu diễn live theo chủ đề",
        "Tiết mục văn nghệ khai trương, Gala Dinner, lễ hội",
        "Phục vụ không gian nhà hàng, khách sạn & resort",
      ],
      isActive: true,
      order: 3,
    },
    {
      id: "english",
      name: "CLB Tiếng Anh",
      shortName: "English Club",
      category: "Ngoại ngữ & Quốc tế",
      url: import.meta.env.VITE_ENGLISH_URL || "https://english.ecoguide.vn",
      tagline:
        "Hỗ trợ giao tiếp, đón tiếp khách quốc tế & giao lưu văn hóa",
      description:
        "Khai thác năng lực ngoại ngữ của sinh viên để hỗ trợ giao tiếp, đón tiếp khách quốc tế, biên dịch cơ bản và dẫn dắt các chương trình giao lưu văn hóa song ngữ.",
      priceRange: "1,5 – 4 triệu VNĐ / chương trình",
      accentColor: "#10b981",
      badge: "Nòng cốt #4",
      highlights: [
        "Đón tiếp & hỗ trợ giao tiếp khách quốc tế",
        "MC song ngữ & điều phối giao lưu văn hóa",
        "Hỗ trợ hội thảo, sự kiện có yếu tố nước ngoài",
      ],
      isActive: true,
      order: 4,
    },
  ],
};

export const NEXUS_STATS = [
  { label: "CLB Nòng cốt giai đoạn 1", value: "04 CLB" },
  { label: "Nhân lực huy động năm 1", value: "24 – 32 SV" },
  { label: "Thời gian phản hồi yêu cầu", value: "< 24 giờ" },
  { label: "Cam kết tiến độ & chất lượng", value: ">= 95%" },
];

export const SERVICE_GROUPS: Record<"single" | "combo" | "custom", ServicePackageItem[]> = {
  single: [
    {
      id: "single-media",
      title: "Dịch vụ Truyền thông & Hình ảnh (YTC Media)",
      badge: "Đơn lẻ",
      price: "3 – 8 triệu VNĐ / gói",
      description:
        "Phù hợp doanh nghiệp F&B, bán lẻ, du lịch cần hình ảnh sự kiện, video ngắn hoặc quản trị nội dung fanpage.",
      deliverables: [
        "Bộ ảnh sự kiện / sản phẩm đã hậu kỳ",
        "Video ngắn Reels/TikTok bắt xu hướng",
        "Thiết kế ấn phẩm & bài viết truyền thông",
      ],
      suitableFor: "Du lịch, F&B, bán lẻ",
    },
    {
      id: "single-music",
      title: "Biểu diễn Âm nhạc & Giải trí (Music Club)",
      badge: "Đơn lẻ",
      price: "2 – 5 triệu VNĐ / chương trình",
      description:
        "Biểu diễn Acoustic, ban nhạc sống và tiết mục nghệ thuật tạo không khí chuyên nghiệp cho sự kiện thương hiệu.",
      deliverables: [
        "Ban nhạc Acoustic 3 – 5 thành viên theo kịch bản",
        "Danh sách bài hát linh hoạt theo chủ đề sự kiện",
        "Phối hợp âm thanh & tổng duyệt trước chương trình",
      ],
      suitableFor: "Khách sạn, resort, nhà hàng, khai trương",
    },
    {
      id: "single-english",
      title: "Hỗ trợ Ngoại ngữ & Đón tiếp Quốc tế (English Club)",
      badge: "Đơn lẻ",
      price: "1,5 – 4 triệu VNĐ / chương trình",
      description:
        "Hỗ trợ giao tiếp tiếng Anh, đón tiếp đoàn khách quốc tế, hội thảo và sự kiện giao lưu văn hóa.",
      deliverables: [
        "Nhân sự giao tiếp tiếng Anh lưu loát tại sự kiện",
        "Hỗ trợ biên dịch tài liệu, slide cơ bản",
        "Điều phối hoạt động giao lưu văn hóa song ngữ",
      ],
      suitableFor: "Khách sạn, lữ hành, sự kiện quốc tế",
    },
    {
      id: "single-guide",
      title: "Thuyết minh & Trải nghiệm Du lịch (EcoGuide Club)",
      badge: "Đơn lẻ",
      price: "2 – 5 triệu VNĐ / chương trình",
      description:
        "Giới thiệu văn hóa, điểm đến Khánh Hòa, hỗ trợ tổ chức chương trình trải nghiệm cho đoàn khách.",
      deliverables: [
        "Xây dựng nội dung thuyết minh tuyến điểm",
        "Hoạt náo, gắn kết đoàn tham quan trải nghiệm",
        "Đảm bảo quy trình chuyên môn & an toàn đoàn",
      ],
      suitableFor: "Công ty lữ hành, khu du lịch, trường học",
    },
  ],
  combo: [
    {
      id: "combo-cultural",
      title: "Gói Sự kiện Giao lưu Văn hóa Quốc tế (4 CLB)",
      badge: "Phổ biến nhất",
      price: "8 – 15 triệu VNĐ / gói",
      description:
        "Chỉ làm việc với một đầu mối NEXUS để phối hợp trọn gói cả 4 CLB trong cùng một chương trình lớn cho khách sạn, resort hoặc sự kiện thương hiệu.",
      deliverables: [
        "CLB Hướng dẫn viên: giới thiệu văn hóa & điều phối trải nghiệm",
        "CLB Tiếng Anh: đón tiếp & giao tiếp khách quốc tế",
        "CLB Âm nhạc: biểu diễn Acoustic & tiết mục văn nghệ",
        "CLB Truyền thông YTC: chụp ảnh, quay phim & dựng recap",
      ],
      suitableFor: "Khách sạn, resort, tổ chức sự kiện, doanh nghiệp lớn",
    },
    {
      id: "combo-launch",
      title: "Gói Khai trương & Ra mắt Thương hiệu (2 – 3 CLB)",
      badge: "Tối ưu chi phí",
      price: "8 – 12 triệu VNĐ / gói",
      description:
        "Kết hợp truyền thông hình ảnh (YTC), biểu diễn nghệ thuật (Music Club) và đón tiếp song ngữ (English Club) giúp sự kiện thu hút và lan tỏa mạnh trên mạng xã hội.",
      deliverables: [
        "Ban nhạc Acoustic khai mạc & đón khách",
        "Quay chụp toàn bộ sự kiện & giao video recap trong 48h",
        "Đội ngũ đón tiếp khách VIP & khách quốc tế",
      ],
      suitableFor: "F&B, bán lẻ, showroom, chiến dịch địa phương",
    },
  ],
  custom: [
    {
      id: "custom-enterprise",
      title: "Gói Thiết kế riêng Theo yêu cầu & Hợp tác dài hạn",
      badge: "Theo hợp đồng",
      price: "Tùy quy mô & ngân sách",
      description:
        "Thiết kế riêng theo mục tiêu CSR, chiến dịch truyền thông quý/năm, khảo sát thị trường hoặc gắn kết tuyển dụng thực tập sinh từ các khoa chuyên môn.",
      deliverables: [
        "Đề bài & KPI may đo theo ngân sách doanh nghiệp",
        "Hợp đồng ba bên minh bạch (Doanh nghiệp – NEXUS – CLB)",
        "Cơ chế đánh giá năng lực để tuyển chọn thực tập sinh sớm",
      ],
      suitableFor: "Doanh nghiệp SME, tập đoàn làm CSR & tuyển dụng",
    },
  ],
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: "Chi phí triển khai",
    nexus: "Thấp & minh bạch",
    agency: "Cao",
    freelancer: "Trung bình",
    directClub: "Thấp",
  },
  {
    criterion: "Cam kết chất lượng, nghiệm thu",
    nexus: "Có, theo quy trình chuẩn",
    agency: "Có",
    freelancer: "Thấp",
    directClub: "Không ổn định",
  },
  {
    criterion: "Hợp đồng ba bên, thanh toán rõ ràng",
    nexus: "Có đầy đủ",
    agency: "Có",
    freelancer: "Hạn chế",
    directClub: "Hạn chế",
  },
  {
    criterion: "Giảng viên, chuyên gia cố vấn",
    nexus: "Có đồng hành",
    agency: "Không",
    freelancer: "Không",
    directClub: "Tùy CLB",
  },
  {
    criterion: "Kết nối tuyển dụng thực tập sinh",
    nexus: "Có hồ sơ đánh giá thực chiến",
    agency: "Không",
    freelancer: "Không",
    directClub: "Hạn chế",
  },
  {
    criterion: "Tìm & phối hợp đa CLB nhanh chóng",
    nexus: "Hồ sơ năng lực số một đầu mối",
    agency: "Không áp dụng",
    freelancer: "Phải tự tìm rời rạc",
    directClub: "Phải tự liên hệ từng nơi",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Tìm hiểu & Chọn dịch vụ CLB",
    description:
      "Doanh nghiệp tham khảo năng lực 4 CLB trên web và chọn đúng nhóm dịch vụ cần hỗ trợ (quay dựng video, thiết kế, âm nhạc, hướng dẫn du lịch, ngoại ngữ hoặc gói khác).",
  },
  {
    step: "02",
    title: "Điền biểu mẫu yêu cầu chi tiết",
    description:
      "Cung cấp thông tin liên hệ, mô tả cụ thể công việc, số lượng/quy mô, thời gian thực hiện và ngân sách dự kiến; nhận mã yêu cầu để theo dõi.",
  },
  {
    step: "03",
    title: "NEXUS tiếp nhận & Tư vấn kết nối",
    description:
      "Trong vòng 24h, NEXUS trao đổi làm rõ nhu cầu với doanh nghiệp và kết nối với CLB có năng lực phù hợp nhất.",
  },
  {
    step: "04",
    title: "Thống nhất phương án, chi phí & tiến độ",
    description:
      "Doanh nghiệp – NEXUS – CLB cùng thống nhất phạm vi công việc, báo giá, lịch trình và ký xác nhận hợp đồng ba bên minh bạch.",
  },
  {
    step: "05",
    title: "CLB triển khai & Bàn giao kết quả",
    description:
      "CLB thực hiện dịch vụ dưới sự giám sát chuyên môn của giảng viên cố vấn, gửi link/biên bản bàn giao kết quả đúng hẹn.",
  },
  {
    step: "06",
    title: "Phản hồi & Đánh giá chất lượng CLB",
    description:
      "Doanh nghiệp tra cứu mã yêu cầu ngay trên web để nghiệm thu và gửi đánh giá chất lượng hợp tác về CLB đó.",
  },
];

export const STAKEHOLDER_VALUES = {
  business: {
    label: "Doanh nghiệp",
    points: [
      "Tiếp cận nhân lực trẻ sáng tạo với chi phí tối ưu hơn agency truyền thống.",
      "Chỉ cần một đầu mối NEXUS để phối hợp đa lĩnh vực: du lịch, truyền thông, âm nhạc, ngoại ngữ.",
      "Bảo đảm chất lượng qua hợp đồng ba bên, quy trình nghiệm thu và giảng viên cố vấn.",
      "Xây dựng phễu tuyển dụng thực tập sinh sớm dựa trên năng lực thực chiến.",
    ],
  },
  students: {
    label: "CLB & Sinh viên",
    points: [
      "Chuyển hóa đam mê & chuyên môn thành nguồn thu nhập minh bạch (85% giá trị hợp đồng về CLB).",
      "Thực hành trên dự án thật của doanh nghiệp Khánh Hòa thay vì chỉ hoạt động phong trào.",
      "Tích lũy hồ sơ năng lực số (E-Portfolio), nhận đánh giá thực tế từ doanh nghiệp.",
      "Mở rộng kết nối nghề nghiệp và cơ hội việc làm tại địa phương ngay khi còn đi học.",
    ],
  },
  ecosystem: {
    label: "Nhà trường & Địa phương",
    points: [
      "Gắn kết chặt chẽ đào tạo với thực tiễn thị trường du lịch, dịch vụ Nha Trang – Khánh Hòa.",
      "Hỗ trợ doanh nghiệp SME tiếp cận lực lượng sáng tạo trẻ, thúc đẩy đổi mới sáng tạo.",
      "Giữ chân nguồn nhân lực trẻ chất lượng cao ở lại làm việc tại tỉnh Khánh Hòa.",
    ],
  },
};

export const NEXUS_FAQS: FaqItem[] = [
  {
    question: "NEXUS có phải là một CLB đơn lẻ không?",
    answer:
      "Không. NEXUS là nền tảng điều phối trung gian kết nối doanh nghiệp tại Khánh Hòa với mạng lưới các CLB sinh viên (khởi đầu với 4 CLB nòng cốt tại Đại học Nha Trang: CLB Hướng dẫn viên, CLB Truyền thông YTC, CLB Âm nhạc và CLB Tiếng Anh), cho phép đặt dịch vụ đơn lẻ hoặc phối hợp đa CLB qua một đầu mối.",
  },
  {
    question: "Chất lượng sinh viên thực hiện dự án được đảm bảo bằng cách nào?",
    answer:
      "Mỗi CLB đều có cơ cấu Ban chủ nhiệm, hồ sơ năng lực, nhân sự dự phòng tránh trùng lịch thi và giảng viên cố vấn đồng hành. Dự án được ký kết theo hợp đồng ba bên, kiểm soát tiến độ theo giai đoạn và nghiệm thu rõ ràng trước khi tất toán.",
  },
  {
    question: "Các đường dẫn (URL) tới từng CLB có thể thay đổi linh hoạt không?",
    answer:
      "Có. Toàn bộ URL cổng từng CLB (ví dụ clb.ecoguide.vn, ytc.ecoguide.vn, music.ecoguide.vn, english.ecoguide.vn), tên hiển thị, mức giá và trạng thái hiển thị đều được quản trị tập trung tại hệ thống Admin của EcoGuide và đồng bộ trực tiếp về trang NEXUS.",
  },
  {
    question: "Doanh nghiệp mất bao lâu để nhận đề xuất phương án sau khi liên hệ?",
    answer:
      "NEXUS cam kết phản hồi yêu cầu ban đầu trong vòng 24 giờ làm việc và gợi ý 1–3 CLB phù hợp cùng bảng báo giá tham khảo.",
  },
];
