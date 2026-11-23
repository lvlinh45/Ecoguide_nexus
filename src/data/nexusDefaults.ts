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
    "Cầu nối Doanh nghiệp Khánh Hòa & 4 CLB Sinh viên ĐH Nha Trang",
  heroSubtitle:
    "Điều phối một đầu mối cho các nhu cầu truyền thông, âm nhạc, hướng dẫn du lịch và ngoại ngữ — quy trình rõ ràng, chi phí tối ưu.",
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
      logoUrl: "/logo_ytc.jpg",
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
      logoUrl: "/logo_amnhac.jpg",
      tagline: "Biểu diễn Acoustic, ban nhạc & tiết mục nghệ thuật sự kiện",
      description:
        "CLB Âm Nhạc – Đại học Nha Trang là nơi hội tụ những tâm hồn yêu âm nhạc, cùng kết nối, sẻ chia và lan tỏa đam mê qua từng giai điệu. Với hoạt động du ca tối thứ Tư hằng tuần và chuỗi đêm nhạc chào đón tân sinh viên thường niên, CLB mang đến một môi trường trẻ trung, năng động và đầy cảm hứng. Không chỉ là nơi âm nhạc cất lên, đây còn là nơi lưu giữ thanh xuân và cùng nhau tạo nên những kỷ niệm đẹp.",
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
      logoUrl: "/logo_english.jpg",
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
    nexus: "Tối ưu & minh bạch",
    agency: "Cao",
    freelancer: "Trung bình",
    directClub: "Thấp",
  },
  {
    criterion: "Chất lượng & cố vấn chuyên môn",
    nexus: "Giảng viên cố vấn đồng hành",
    agency: "Theo hợp đồng",
    freelancer: "Khó kiểm soát",
    directClub: "Chưa đồng đều",
  },
  {
    criterion: "Hợp đồng & thanh toán",
    nexus: "Hợp đồng ba bên rõ ràng",
    agency: "Có đầy đủ",
    freelancer: "Hạn chế",
    directClub: "Tự thỏa thuận",
  },
  {
    criterion: "Phối hợp đa lĩnh vực",
    nexus: "Một đầu mối kết nối 4 CLB",
    agency: "Phụ thuộc gói",
    freelancer: "Phải tự tìm lẻ",
    directClub: "Liên hệ từng CLB",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Chọn dịch vụ & gửi yêu cầu",
    description:
      "Chọn gói phù hợp trên danh mục và gửi mô tả nhu cầu, thời gian, ngân sách dự kiến.",
  },
  {
    step: "02",
    title: "Tư vấn & ghép nối CLB (< 24h)",
    description:
      "NEXUS làm rõ yêu cầu trong vòng 24 giờ và điều phối CLB phù hợp kèm báo giá chi tiết.",
  },
  {
    step: "03",
    title: "Xác nhận & triển khai",
    description:
      "Thống nhất phạm vi công việc qua hợp đồng ba bên, thực hiện dưới sự đồng hành của cố vấn.",
  },
  {
    step: "04",
    title: "Bàn giao & hoàn tất",
    description:
      "Bàn giao sản phẩm đúng hẹn, tiếp nhận chỉnh sửa theo cam kết và xác nhận hoàn thành.",
  },
];

export const STAKEHOLDER_VALUES = {
  business: {
    label: "Doanh nghiệp",
    points: [
      "Tiếp cận nhân lực trẻ sáng tạo với chi phí tối ưu hơn agency truyền thống.",
      "Chỉ cần một đầu mối để phối hợp đồng bộ từ truyền thông, âm nhạc tới đón tiếp.",
      "Kết nối sớm với sinh viên có năng lực thực chiến để tuyển dụng thực tập sinh.",
    ],
  },
  students: {
    label: "CLB & Sinh viên",
    points: [
      "Tạo nguồn thu minh bạch cho hoạt động CLB (85% giá trị hợp đồng về CLB).",
      "Thực hành trực tiếp trên dự án doanh nghiệp thay vì chỉ hoạt động nội bộ.",
      "Tích lũy hồ sơ năng lực thực tế (E-Portfolio) và cơ hội nghề nghiệp tại địa phương.",
    ],
  },
  ecosystem: {
    label: "Nhà trường & Địa phương",
    points: [
      "Gắn kết đào tạo với nhu cầu thực tiễn của thị trường dịch vụ Nha Trang – Khánh Hòa.",
      "Hỗ trợ doanh nghiệp SME tiếp cận lực lượng sáng tạo trẻ với chi phí hợp lý.",
      "Giữ chân nguồn nhân lực sinh viên chất lượng ở lại đóng góp cho địa phương.",
    ],
  },
};

export const NEXUS_FAQS: FaqItem[] = [
  {
    question: "NEXUS hoạt động như thế nào?",
    answer:
      "NEXUS là đầu mối điều phối trung gian kết nối doanh nghiệp tại Khánh Hòa với mạng lưới CLB sinh viên Đại học Nha Trang, hỗ trợ đặt dịch vụ đơn lẻ hoặc gói phối hợp đa CLB.",
  },
  {
    question: "Chất lượng triển khai được đảm bảo ra sao?",
    answer:
      "Mỗi dự án đều có Ban chủ nhiệm CLB phụ trách, nhân sự dự phòng, hợp đồng ba bên minh bạch và giảng viên cố vấn chuyên môn theo sát đến khi bàn giao.",
  },
  {
    question: "Bao lâu doanh nghiệp nhận được phản hồi báo giá?",
    answer:
      "NEXUS phản hồi trong vòng 24 giờ làm việc kèm đề xuất phương án và mức chi phí tham khảo phù hợp ngân sách.",
  },
];
