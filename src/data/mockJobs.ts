import { Job, ShiftSlot, StudentProfile } from '../types';

export const MAJORS = [
  'Tất cả ngành học',
  'Công nghệ thông tin',
  'Marketing & Truyền thông',
  'Kinh tế & Quản trị kinh doanh',
  'Thiết kế đồ họa & Đa phương tiện',
  'Ngôn ngữ Anh & Ngoại ngữ',
  'Tài chính - Kế toán',
  'Du lịch - Nhà hàng - Khách sạn',
  'Sư phạm & Giáo dục'
];

export const CITIES = [
  'Tất cả địa điểm',
  'TP. Hồ Chí Minh',
  'Hà Nội',
  'Đà Nẵng',
  'Cần Thơ',
  'Làm từ xa (Toàn quốc)'
];

export const SALARY_CATEGORIES = [
  'Tất cả mức lương',
  'Theo giờ (25k - 60k/h)',
  'Dưới 3 triệu',
  '3 - 6 triệu',
  '6 - 10 triệu',
  'Trên 10 triệu'
];

export const JOB_TYPES = [
  'Tất cả loại hình',
  'Part-time',
  'Full-time',
  'Thực tập'
];

export const EXPERIENCE_LEVELS = [
  'Tất cả kinh nghiệm',
  'Chưa có kinh nghiệm',
  'Dưới 6 tháng',
  'Từ 6 tháng - 1 năm',
  'Trên 1 năm'
];

export const WORK_MODES = [
  'Tất cả hình thức',
  'Tại văn phòng',
  'Làm từ xa (Remote)',
  'Linh hoạt (Hybrid)'
];

export const SHIFT_SLOTS: ShiftSlot[] = [
  'Sáng',
  'Chiều',
  'Tối',
  'Cuối tuần',
  'Linh hoạt theo lịch học'
];

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-01',
    title: 'Thực tập sinh Frontend Developer (React / TypeScript)',
    titleEn: 'Frontend Developer Intern (React / TypeScript)',
    companyName: 'VNG Campus Tech Lab',
    companyShort: 'VNG',
    companyColor: '#0F766E',
    address: 'Z06 Đường số 13, Khu chế xuất Tân Thuận, Quận 7, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    district: 'Quận 7',
    salaryText: '5.500.000 - 8.000.000 đ/tháng',
    salaryTextEn: '5.5M - 8.0M VND / month',
    salaryCategory: '6 - 10 triệu',
    jobType: 'Thực tập',
    workMode: 'Linh hoạt (Hybrid)',
    experience: 'Chưa có kinh nghiệm',
    major: 'Công nghệ thông tin',
    skills: ['React / TypeScript', 'HTML/CSS', 'Git', 'Giao tiếp tiếng Anh'],
    availableShifts: ['Sáng', 'Chiều', 'Linh hoạt theo lịch học'],
    postedAt: '2 giờ trước',
    deadline: '30/11/2026',
    vacancies: 4,
    description: [
      'Tham gia phát triển giao diện ứng dụng web phục vụ hàng triệu người dùng trẻ và sinh viên.',
      'Phối hợp cùng Product Designer để chuyển đổi bản thiết kế Figma thành giao diện mượt mà.',
      'Được Senior Engineer hướng dẫn 1-1 hàng tuần về kỹ năng viết code sạch và quy trình chuyên nghiệp.'
    ],
    descriptionEn: [
      'Participate in building high-performance web applications for student community products.',
      'Collaborate with Product Designers to translate Figma designs into pixel-perfect components.',
      'Mentored 1-on-1 by Senior Engineers on clean code architecture and agile workflow.'
    ],
    requirements: [
      'Sinh viên năm 3, 4 chuyên ngành CNTT, Khoa học máy tính hoặc đam mê lập trình web.',
      'Nắm vững kiến thức HTML/CSS, JavaScript/TypeScript và có dự án môn học với React.',
      'Đảm bảo tối thiểu 4-5 buổi/tuần, hỗ trợ đổi ca linh hoạt theo lịch thi.'
    ],
    requirementsEn: [
      '3rd or 4th-year students majoring in CS, IT or equivalent.',
      'Good foundation in HTML/CSS, modern JavaScript/TypeScript and React projects.',
      'Available at least 20 hours/week, flexible scheduling during university exams.'
    ],
    benefits: [
      'Trợ cấp thực tập cạnh tranh + ăn trưa miễn phí tại Campus.',
      'Hỗ trợ đóng dấu mộc thực tập và đề tài khóa luận tốt nghiệp.',
      'Cơ hội ký hợp đồng chính thức ngay sau khi kết thúc kỳ thực tập.'
    ],
    benefitsEn: [
      'Competitive stipend + free lunch at campus cafeteria.',
      'Official internship certificate and graduation thesis sponsorship.',
      'Direct path to full-time junior position upon graduation.'
    ],
    scheduleDetail: 'Ca Sáng (08:30-12:00) hoặc Ca Chiều (13:30-17:30). Remote 2 ngày/tuần.',
    contactPerson: 'Chị Minh Thư - Talent Acquisition'
  },
  {
    id: 'job-02',
    title: 'Cộng tác viên Sáng tạo Nội dung TikTok & CapCut (Part-time)',
    titleEn: 'Social Media & TikTok Content Creator (Part-time)',
    companyName: 'Coolmate Vietnam',
    companyShort: 'CM',
    companyColor: '#1E293B',
    address: '69 Vũ Trọng Phụng, Quận Thanh Xuân, Hà Nội',
    city: 'Hà Nội',
    district: 'Quận Thanh Xuân',
    salaryText: '35.000 - 50.000 đ/giờ',
    salaryTextEn: '35k - 50k VND / hour',
    salaryCategory: 'Theo giờ (25k - 60k/h)',
    jobType: 'Part-time',
    workMode: 'Linh hoạt (Hybrid)',
    experience: 'Dưới 6 tháng',
    major: 'Marketing & Truyền thông',
    skills: ['Viết Content / Copywriting', 'Quay dựng TikTok / CapCut', 'Canva'],
    availableShifts: ['Sáng', 'Chiều', 'Tối', 'Linh hoạt theo lịch học'],
    postedAt: '4 giờ trước',
    deadline: '25/11/2026',
    vacancies: 3,
    description: [
      'Lên ý tưởng và quay dựng các video ngắn review sản phẩm cho đối tượng sinh viên.',
      'Cập nhật các trào lưu mới nhất trên TikTok, Instagram Reels để đưa vào kịch bản.',
      'Hỗ trợ quản lý lịch đăng và tương tác với bình luận của người xem.'
    ],
    descriptionEn: [
      'Brainstorm concepts and shoot short-form review videos targeting students.',
      'Keep up with viral trends on TikTok and Instagram Reels.',
      'Assist in managing posting schedules and community interactions.'
    ],
    requirements: [
      'Sinh viên các trường ĐH tại Hà Nội yêu thích sáng tạo video và thời trang.',
      'Biết sử dụng điện thoại để quay và dùng CapCut cắt ghép video mượt mà.',
      'Cam kết làm việc 16 - 24 giờ/tuần, lên văn phòng 1-2 buổi/tuần để quay sản phẩm.'
    ],
    requirementsEn: [
      'Students in Hanoi with passion for creative video creation and lifestyle fashion.',
      'Familiar with smartphone videography and CapCut editing.',
      'Able to commit 16-24 hours/week, 1-2 office visits for product shoots.'
    ],
    benefits: [
      'Lương giờ cạnh tranh + thưởng KPI theo view vượt mục tiêu.',
      'Tặng sản phẩm thời trang định kỳ hàng tháng.',
      'Được đào tạo bài bản tư duy truyền thông số từ đội ngũ Marketing đầu ngành.'
    ],
    benefitsEn: [
      'Hourly pay + performance bonus per viral video milestone.',
      'Monthly free product wardrobe.',
      'Hands-on coaching on digital branding from top marketing specialists.'
    ],
    scheduleDetail: 'Linh hoạt đăng ký ca 4 tiếng theo tuần. Có ca tối và cuối tuần.',
    contactPerson: 'Anh Hoàng Nam - Content Lead'
  },
  {
    id: 'job-03',
    title: 'Trợ giảng & Gia sư Tiếng Anh Giao tiếp (Ca tối / Cuối tuần)',
    titleEn: 'English Teaching Assistant & Tutor (Evenings / Weekends)',
    companyName: 'Zim Academy',
    companyShort: 'ZIM',
    companyColor: '#0284C7',
    address: '130 Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    district: 'Quận 3',
    salaryText: '45.000 - 65.000 đ/giờ',
    salaryTextEn: '45k - 65k VND / hour',
    salaryCategory: 'Theo giờ (25k - 60k/h)',
    jobType: 'Part-time',
    workMode: 'Tại văn phòng',
    experience: 'Chưa có kinh nghiệm',
    major: 'Ngôn ngữ Anh & Ngoại ngữ',
    skills: ['Giao tiếp tiếng Anh', 'Gia sư / Giảng dạy', 'Kiên nhẫn'],
    availableShifts: ['Tối', 'Cuối tuần', 'Linh hoạt theo lịch học'],
    postedAt: 'Hôm nay',
    deadline: '15/11/2026',
    vacancies: 6,
    description: [
      'Hỗ trợ giáo viên trong các lớp IELTS và giao tiếp tiếng Anh cơ bản.',
      'Kèm cặp 1-1 phát âm và chấm bài tập ngữ pháp, bài viết ngắn cho học viên.',
      'Tạo không khí học tập hào hứng, thân thiện và giải đáp thắc mắc sau buổi học.'
    ],
    descriptionEn: [
      'Assist instructors in IELTS and everyday English communication classes.',
      'Conduct 1-on-1 pronunciation coaching and homework reviews.',
      'Foster an engaging classroom atmosphere and support student inquiries.'
    ],
    requirements: [
      'Sinh viên có chứng chỉ IELTS từ 6.5 hoặc tương đương.',
      'Phát âm chuẩn, giao tiếp niềm nở và có tinh thần trách nhiệm.',
      'Rảnh ít nhất 3 ca tối (18h-21h) hoặc ca Thứ 7 / Chủ Nhật.'
    ],
    requirementsEn: [
      'Students with IELTS 6.5+ or equivalent English certification.',
      'Clear pronunciation, friendly communication and high reliability.',
      'Available for at least 3 evening shifts (6pm-9pm) or weekends.'
    ],
    benefits: [
      'Thu nhập cao không ảnh hưởng lịch học ban ngày (4 - 7 triệu/tháng).',
      'Tài trợ 50% lệ phí thi lại chứng chỉ ngoại ngữ sau 6 tháng.',
      'Môi trường năng động, kết nối với nhiều bạn bè giỏi giang.'
    ],
    benefitsEn: [
      'High hourly rate with zero clash with daytime classes ($150 - $300/mo).',
      '50% test fee sponsorship for language certification exams.',
      'Vibrant academic network with high-achieving peers.'
    ],
    scheduleDetail: 'Ca Tối (18:00 - 21:00) hoặc Ca Cuối Tuần (08:30 - 11:30, 14:00 - 17:00).',
    contactPerson: 'Cô Thanh Thảo - Academic Coordinator'
  },
  {
    id: 'job-04',
    title: 'Thiết kế Đồ họa & Banner Truyền thông (Remote 100%)',
    titleEn: 'Graphic & Social Media Designer (100% Remote)',
    companyName: 'Canva Vietnam Studio',
    companyShort: 'CVA',
    companyColor: '#4F46E5',
    address: 'Làm việc trực tuyến từ xa (Toàn quốc)',
    city: 'Làm từ xa (Toàn quốc)',
    district: 'Toàn quốc',
    salaryText: '4.500.000 - 7.500.000 đ/tháng',
    salaryTextEn: '4.5M - 7.5M VND / month',
    salaryCategory: '3 - 6 triệu',
    jobType: 'Part-time',
    workMode: 'Làm từ xa (Remote)',
    experience: 'Từ 6 tháng - 1 năm',
    major: 'Thiết kế đồ họa & Đa phương tiện',
    skills: ['Canva / Figma', 'Photoshop', 'Tư duy bố cục'],
    availableShifts: ['Sáng', 'Chiều', 'Tối', 'Cuối tuần', 'Linh hoạt theo lịch học'],
    postedAt: '1 ngày trước',
    deadline: '28/11/2026',
    vacancies: 5,
    description: [
      'Thiết kế ấn phẩm truyền thông, mẫu thuyết trình cho sinh viên và giới trẻ.',
      'Sáng tạo infographic, banner sự kiện và sticker số.',
      'Làm việc 100% từ xa, chủ động phân bổ thời gian theo tiến độ dự án.'
    ],
    descriptionEn: [
      'Design social graphics, presentation decks and templates for youth audiences.',
      'Create infographics, event banners and digital illustration assets.',
      '100% remote workflow with fully self-paced project deadlines.'
    ],
    requirements: [
      'Sinh viên ngành Thiết kế đồ họa hoặc có Portfolio các thiết kế đã làm.',
      'Thành thạo Figma hoặc Illustrator/Photoshop.',
      'Có laptop cá nhân kết nối mạng ổn định, cam kết đúng hạn deadline.'
    ],
    requirementsEn: [
      'Students in Graphic Design or with practical design portfolio.',
      'Proficient in Figma, Adobe Illustrator or Photoshop.',
      'Personal workstation, reliable internet and strong deadline punctuality.'
    ],
    benefits: [
      'Làm việc tại nhà không tốn chi phí đi lại.',
      'Cấp tài khoản thiết kế Pro bản quyền cao cấp.',
      'Nhận thanh toán đều đặn vào ngày 5 hàng tháng.'
    ],
    benefitsEn: [
      'Work from any place with zero commute cost.',
      'Free premium software licenses provided.',
      'Punctual monthly direct bank transfers.'
    ],
    scheduleDetail: 'Tự do sắp xếp giờ làm miễn đảm bảo hoàn thành số lượng sản phẩm tuần.',
    contactPerson: 'Anh Minh Quân - Design Lead'
  },
  {
    id: 'job-05',
    title: 'Nhân viên Pha chế & Phục vụ Khách hàng (Barista Ca 4 tiếng)',
    titleEn: 'Part-time Barista & Customer Service (4-hour Shifts)',
    companyName: 'The Coffee House',
    companyShort: 'TCH',
    companyColor: '#B45309',
    address: '86 Cao Thắng, Phường 4, Quận 3, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    district: 'Quận 3',
    salaryText: '28.000 - 36.000 đ/giờ',
    salaryTextEn: '28k - 36k VND / hour',
    salaryCategory: 'Theo giờ (25k - 60k/h)',
    jobType: 'Part-time',
    workMode: 'Tại văn phòng',
    experience: 'Chưa có kinh nghiệm',
    major: 'Du lịch - Nhà hàng - Khách sạn',
    skills: ['Giao tiếp niềm nở', 'Làm việc nhóm', 'Pha chế'],
    availableShifts: ['Sáng', 'Chiều', 'Tối', 'Cuối tuần', 'Linh hoạt theo lịch học'],
    postedAt: '2 ngày trước',
    deadline: '20/11/2026',
    vacancies: 8,
    description: [
      'Chào đón khách hàng, ghi order và tư vấn đồ uống tại quầy.',
      'Thực hiện pha chế cà phê, trà trái cây theo đúng định lượng chuẩn.',
      'Giữ gìn không gian quán sạch sẽ, gọn gàng và ngăn nắp.'
    ],
    descriptionEn: [
      'Greet guests, take beverage orders and recommend specialty drinks.',
      'Prepare espresso, blended drinks and teas following recipes.',
      'Maintain a welcoming, clean and organized cafe environment.'
    ],
    requirements: [
      'Sinh viên từ 18 tuổi trở lên, chăm chỉ và vui vẻ.',
      'Không cần kinh nghiệm, được đào tạo pha chế bài bản trong tuần đầu có hưởng lương.',
      'Đăng ký tối thiểu 4 ca/tuần (mỗi ca 4 tiếng).'
    ],
    requirementsEn: [
      'Students aged 18+, friendly demeanor and reliable work ethic.',
      'No experience needed; paid comprehensive barista training provided.',
      'Able to commit at least 4 shifts/week (4 hours per shift).'
    ],
    benefits: [
      'Lương giờ + phụ cấp gửi xe + thưởng doanh số chi nhánh.',
      'Được giảm 50% thức uống trong ca làm việc.',
      'Cơ hội lên Quản lý ca sau 6 tháng gắn bó.'
    ],
    benefitsEn: [
      'Hourly wage + parking allowance + branch monthly bonus.',
      '50% staff beverage discount during working hours.',
      'Promotion track to Shift Supervisor within 6 months.'
    ],
    scheduleDetail: 'Ca Sáng (7h-11h30), Ca Chiều (12h-16h30), Ca Tối (17h-22h). Đổi ca dễ dàng.',
    contactPerson: 'Anh Quốc Bảo - Cửa hàng trưởng'
  },
  {
    id: 'job-06',
    title: 'Thực tập sinh Phân tích Dữ liệu Kinh doanh (Data Analyst)',
    titleEn: 'Business Data Analyst Intern (E-Commerce)',
    companyName: 'Shopee Vietnam',
    companyShort: 'SP',
    companyColor: '#EA580C',
    address: 'Tòa nhà Capital Place, 29 Liễu Giai, Quận Ba Đình, Hà Nội',
    city: 'Hà Nội',
    district: 'Quận Ba Đình',
    salaryText: '7.000.000 - 10.000.000 đ/tháng',
    salaryTextEn: '7M - 10M VND / month',
    salaryCategory: '6 - 10 triệu',
    jobType: 'Full-time',
    workMode: 'Tại văn phòng',
    experience: 'Dưới 6 tháng',
    major: 'Kinh tế & Quản trị kinh doanh',
    skills: ['Excel nâng cao', 'SQL cơ bản', 'Phân tích dữ liệu', 'Tiếng Anh'],
    availableShifts: ['Sáng', 'Chiều'],
    postedAt: '1 ngày trước',
    deadline: '05/12/2026',
    vacancies: 2,
    description: [
      'Trích xuất và tổng hợp dữ liệu giao dịch ngành hàng tiêu dùng.',
      'Xây dựng các biểu đồ báo cáo hiệu quả chương trình khuyến mãi tháng.',
      'Hỗ trợ chuyên viên phân tích phát hiện các xu hướng mua sắm mới của giới trẻ.'
    ],
    descriptionEn: [
      'Extract and consolidate transaction datasets for consumer goods categories.',
      'Build KPI tracking dashboards for monthly mega shopping campaigns.',
      'Assist senior analysts in identifying student consumer shopping trends.'
    ],
    requirements: [
      'Sinh viên năm cuối các ngành Kinh tế, Toán ứng dụng, MIS, Tài chính.',
      'Thành thạo Excel (VLOOKUP, Pivot Table) và hiểu biết về SQL.',
      'Có khả năng thực tập Full-time từ Thứ 2 đến Thứ 6 (hỗ trợ nghỉ buổi thi).'
    ],
    requirementsEn: [
      'Final-year students in Economics, MIS, Applied Math or Finance.',
      'Proficient in Excel and basic relational SQL queries.',
      'Available for full-time schedule Mon-Fri with study-exam leave support.'
    ],
    benefits: [
      'Mức hỗ trợ thực tập hấp dẫn hàng đầu cho sinh viên.',
      'Làm việc tại văn phòng hiện đại với quầy đồ ăn vặt miễn phí.',
      'Ưu tiên đặc cách vào vị trí nhân viên chính thức sau thực tập.'
    ],
    benefitsEn: [
      'Top-tier internship compensation for university seniors.',
      'Modern workspace with free snack & beverage pantry.',
      'Fast-track offer for official graduate associate program.'
    ],
    scheduleDetail: 'Thứ 2 - Thứ 6 (09:00 - 18:00). Hỗ trợ nghỉ bảo vệ khóa luận.',
    contactPerson: 'Chị Lan Anh - HR Campus'
  }
];

export const DEFAULT_STUDENT_PROFILE: StudentProfile = {
  fullName: 'Nguyễn Văn Minh',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  email: 'minh.nguyen@student.edu.vn',
  phone: '0912 345 678',
  address: '280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh',
  university: 'Đại học Sư phạm TP.HCM',
  faculty: 'Công nghệ thông tin',
  gpa: '3.62 / 4.0',
  graduationYear: '2027',
  skills: ['React / TypeScript', 'HTML/CSS', 'Canva', 'Giao tiếp tiếng Anh'],
  bio: 'Sinh viên năm 3 năng động, đam mê lập trình web và sáng tạo công nghệ. Đang tìm kiếm cơ hội thực tập hoặc việc làm Part-time để tích lũy kinh nghiệm thực tế và rèn luyện kỹ năng làm việc nhóm.',
  desiredSalary: 'Theo giờ (25k - 60k/h)',
  desiredJobType: 'Part-time',
  preferredCity: 'TP. Hồ Chí Minh',
  portfolioUrl: 'https://github.com/student-portfolio',
  githubUrl: 'https://github.com'
};
