export interface NewsItem {
    id: string;
    title: string;
    description: string;
    content: string; // HTML content
    date: string; // ISO string or formatted date string
    image: string;
}

const LOREM_IPSUM = `
<p style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p style="margin-bottom: 16px;">Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst. Fusce convallis.</p>
`;

export const MOCK_NEWS: NewsItem[] = [
    {
        id: "new-detailed-1",
        title: "Becamex IDC – 5 Năm Liên Tiếp Đứng Đầu Danh Sách TOP 10 Công Ty Bất Động Sản Công Nghiệp Uy Tín",
        description: "Becamex IDC tiếp tục khẳng định vị thế dẫn đầu khi liên tiếp 5 năm được vinh danh trong Top 10 Công ty Bất động sản công nghiệp uy tín.",
        content: `
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Lễ công bố Top 10 Công ty Bất động sản uy tín" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
                <figcaption style="text-align: center; font-style: italic; color: #666;">Ông Nguyễn Văn Thanh Huy, Phó Tổng Giám đốc Tổng công ty Becamex IDC nhận Cúp và Giấy chứng nhận TOP 10 Công ty Bất động sản công nghiệp uy tín năm 2025</figcaption>
            </figure>

            <p style="margin-bottom: 16px;">Với hơn 40 năm kinh nghiệm và sở hữu quỹ đất khu công nghiệp lớn nhất cả nước, Becamex không chỉ phát triển các khu công nghiệp đơn thuần mà còn xây dựng một hệ sinh thái khép kín, tạo ra giá trị gia tăng lớn cho nhà đầu tư và nền kinh tế. Trong đó, Becamex đặc biệt chú trọng công tác chuyển đổi số và xây dựng hệ sinh thái đổi mới sáng tạo.</p>

            <p style="margin-bottom: 16px;">Becamex hướng tới mục đích tham gia thúc đẩy việc chuyển đổi mô hình phát triển công nghiệp của các địa phương mà Becamex và VSIP hiện diện, hỗ trợ các nhà đầu tư, các doanh nghiệp... chuyển đổi từ thâm dụng lao động, đất đai sang thâm dụng vốn, tri thức và khoa học công nghệ. Cụ thể, Tại tỉnh Bình Dương, Becamex đã đầu tư hàng loạt các phòng lab, trung tâm xuất sắc, viện nghiên cứu, vườn ươm doanh nghiệp, cũng như các chương trình đào tạo về chuyển đổi số, các chương trình hỗ trợ nhà đầu tư chuyển đổi công nghiệp 4.0 bằng các giải pháp công nghệ địa phương... qua đó tham gia giải quyết các bài toán vĩ mô của quốc gia.</p>

            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Tầm nhìn chiến lược dài hạn</h3>
            ${LOREM_IPSUM}
            
            <p style="margin-bottom: 16px;">Từ những tiềm lực phát triển mạnh mẽ, vững chắc đó Becamex IDC đã cùng cổ chắc chắn vị thế của một doanh nghiệp dẫn đầu trong lĩnh vực bất động sản công nghiệp tại Việt Nam, khi liên tiếp 5 năm đứng đầu danh sách Top 10 công ty bất động sản Công nghiệp uy tín.</p>

            <p style="margin-bottom: 16px;"><strong>Top 10 Công ty uy tín ngành Bất động sản</strong> là kết quả nghiên cứu độc lập của Vietnam Report, được xây dựng dựa trên nguyên tắc khoa học và khách quan nhằm ghi nhận và tôn vinh những doanh nghiệp trụ cột (key player) của ngành Bất động sản đã và đang nỗ lực hết mình đạt nhiều thành tựu trong việc cung cấp sản phẩm cho khách hàng, tạo dựng được hình ảnh ấn tượng trong mắt công chúng và nhà đầu tư, thể hiện bản lĩnh vững vàng với năng lực tài chính ổn định, sức chống chịu tốt khi phải đối mặt với vô vàn khó khăn.</p>

            ${LOREM_IPSUM}

            <p style="margin-bottom: 16px;">Các doanh nghiệp được lọc ra từ cơ sở dữ liệu về các doanh nghiệp Việt Nam trong các nghiên cứu xếp hạng của Vietnam Report thuộc ngành Bất động sản với dữ liệu tài chính kết hợp sử dụng phương pháp Media Coding (mã hóa dữ liệu báo chí trên truyền thông), khảo sát đối tượng nghiên cứu và các bên liên quan nhằm đưa ra đánh giá tổng hợp, khách quan và đầy đủ nhất về doanh nghiệp xuyên suốt giai đoạn khó khăn vừa qua.</p>

            <p style="text-align: right; font-weight: bold; margin-top: 32px;">Nguồn: daibieunhandan.vn</p>
        `,
        date: "2025-04-24",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "1",
        title: "Becamex IDC kiến tạo mô hình khu công nghiệp sinh thái, thông minh thế hệ mới",
        description: "Tiên phong trong việc phát triển các khu công nghiệp xanh, bền vững.",
        content: `
            <p style="margin-bottom: 16px; font-weight: 500;">Becamex IDC đang dẫn đầu trong việc xây dựng các khu công nghiệp bền vững, áp dụng công nghệ thông minh để bảo vệ môi trường và tối ưu hóa vận hành. Đây là bước đi chiến lược nhằm thu hút đầu tư chất lượng cao.</p>
            
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Khu công nghiệp sinh thái" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
                <figcaption style="text-align: center; font-style: italic; color: #666;">Mô hình khu công nghiệp thông minh thế hệ mới</figcaption>
            </figure>

            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Chiến lược phát triển bền vững</h3>
            <p style="margin-bottom: 16px;">Việc chuyển đổi sang mô hình khu công nghiệp sinh thái không chỉ giúp bảo vệ môi trường mà còn mang lại lợi ích kinh tế lâu dài cho các doanh nghiệp. Chúng tôi tập trung vào việc sử dụng năng lượng tái tạo, xử lý nước thải tiên tiến và xây dựng hệ thống giao thông xanh.</p>
            
            ${LOREM_IPSUM}
            
            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Hợp tác quốc tế và chuyển giao công nghệ</h3>
            ${LOREM_IPSUM}

            <p style="margin-bottom: 16px;">Hệ sinh thái công nghiệp - đô thị - dịch vụ của Becamex tiếp tục được hoàn thiện, tạo môi trường sống và làm việc lý tưởng cho các chuyên gia và người lao động.</p>
        `,
        date: "2025-05-17",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "2",
        title: "Hội thảo “Building Future – Ready Enterprises” thúc đẩy đổi mới sáng tạo",
        description: "Chia sẻ các giải pháp chuyển đổi số và đổi mới sáng tạo cho doanh nghiệp.",
        content: `
            <p style="margin-bottom: 16px;">Hội thảo tập trung vào các giải pháp giúp doanh nghiệp sẵn sàng cho tương lai, đặc biệt là trong bối cảnh chuyển đổi số đang diễn ra mạnh mẽ.</p>
            
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" alt="Hội thảo Building Future" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
                <figcaption style="text-align: center; font-style: italic; color: #666;">Các diễn giả chia sẻ tại hội thảo</figcaption>
            </figure>

            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Nội dung chính của hội thảo</h3>
            <p style="margin-bottom: 16px;">Các chuyên gia đã thảo luận về tầm quan trọng của việc xây dựng văn hóa đổi mới sáng tạo trong doanh nghiệp, cũng như cách thức ứng dụng các công nghệ mới như AI, Big Data vào quy trình sản xuất kinh doanh.</p>
            
            ${LOREM_IPSUM}

            <ul style="margin-bottom: 16px; padding-left: 20px; list-style-type: disc;">
                <li style="margin-bottom: 8px;">Chiến lược chuyển đổi số toàn diện.</li>
                <li style="margin-bottom: 8px;">Xây dựng đội ngũ nhân sự số.</li>
                <li style="margin-bottom: 8px;">Tối ưu hóa vận hành bằng công nghệ.</li>
                <li style="margin-bottom: 8px;">Quản lý rủi ro trên không gian mạng.</li>
                <li style="margin-bottom: 8px;">Tạo dựng lợi thế cạnh tranh bền vững.</li>
            </ul>

            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Kết luận và phương hướng hành động</h3>
            ${LOREM_IPSUM}
        `,
        date: "2025-04-22",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "3",
        title: "Thành lập Trung tâm nghiên cứu vi điện tử tại Bình Dương",
        description: "Đánh dấu bước tiến quan trọng trong lĩnh vực công nghệ cao tại tỉnh.",
        content: `
            <p style="margin-bottom: 16px;">Trung tâm nghiên cứu vi điện tử mới sẽ tập trung vào thiết kế và kiểm thử chip, đào tạo nhân lực chất lượng cao cho ngành công nghiệp bán dẫn.</p>
            
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Trung tâm nghiên cứu vi điện tử" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
            </figure>

            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Cơ hội cho ngành bán dẫn Việt Nam</h3>
            ${LOREM_IPSUM}

            <p style="margin-bottom: 16px;">Đây là bước đi chiến lược của tỉnh Bình Dương nhằm đón đầu làn sóng đầu tư vào ngành công nghiệp bán dẫn, góp phần nâng cao giá trị gia tăng của nền kinh tế địa phương.</p>
            
            ${LOREM_IPSUM}
        `,
        date: "2025-04-21",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "4",
        title: "Becamex và VSIP bắt tay cùng VRG : Cú hích cho Bình Dương",
        description: "Hợp tác chiến lược giữa các ông lớn bất động sản công nghiệp.",
        content: `
            <p style="margin-bottom: 16px;">Sự hợp tác giữa Becamex, VSIP và VRG hứa hẹn sẽ tạo ra những cú hích lớn cho sự phát triển kinh tế hạ tầng của Bình Dương trong thời gian tới.</p>
            
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" alt="Lễ ký kết hợp tác" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
                <figcaption style="text-align: center; font-style: italic; color: #666;">Lễ ký kết thỏa thuận hợp tác chiến lược</figcaption>
            </figure>

             <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Quy mô và tầm nhìn hợp tác</h3>
            ${LOREM_IPSUM}

            <p style="margin-bottom: 16px;">Ba "ông lớn" trong ngành bất động sản công nghiệp sẽ cùng nhau chia sẻ nguồn lực, kinh nghiệm để phát triển các dự án quy mô lớn, hiện đại, đáp ứng nhu cầu ngày càng cao của các nhà đầu tư quốc tế.</p>
            
            ${LOREM_IPSUM}
        `,
        date: "2025-04-04",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "5",
        title: "Becamex IDC tiếp tục lọt Top 50 công ty niêm yết tốt nhất",
        description: "Khẳng định vị thế uy tín và tiềm lực tài chính vững mạnh trên thị trường.",
        content: `
            <p style="margin-bottom: 16px;">Becamex IDC được vinh danh trong Top 50 công ty niêm yết tốt nhất Việt Nam, chứng minh chiến lược phát triển đúng đắn và hiệu quả.</p>
            
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Top 50 công ty niêm yết" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
            </figure>

            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Những con số ấn tượng</h3>
            ${LOREM_IPSUM}

            <p style="margin-bottom: 16px;">Giải thưởng này là sự ghi nhận xứng đáng cho những nỗ lực không ngừng nghỉ của Becamex IDC trong việc duy trì tăng trưởng bền vững, minh bạch thông tin và đảm bảo quyền lợi cho cổ đông.</p>
            
            ${LOREM_IPSUM}
        `,
        date: "2025-06-01",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "6",
        title: "Bình Dương: Điểm sáng thu hút FDI công nghệ cao",
        description: "Tỉnh tiếp tục dẫn đầu cả nước về thu hút vốn đầu tư nước ngoài.",
        content: `
            <p style="margin-bottom: 16px;">Với cơ sở hạ tầng đồng bộ và chính sách ưu đãi hấp dẫn, Bình Dương đang trở thành điểm đến lý tưởng cho các tập đoàn công nghệ lớn trên thế giới.</p>
            
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" alt="Thu hút FDI công nghệ cao" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
            </figure>

            <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Chuyển dịch cơ cấu dòng vốn đầu tư</h3>
            ${LOREM_IPSUM}

            <p style="margin-bottom: 16px;">Tỉnh đang ưu tiên thu hút các dự án có hàm lượng công nghệ cao, ít thâm dụng lao động và thân thiện với môi trường.</p>
        `,
        date: "2025-06-15",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: "7",
        title: "Lễ khởi công Khu công nghiệp VSIP III - Giai đoạn 2",
        description: "Mở rộng quy mô, đáp ứng nhu cầu thuê đất công nghiệp ngày càng tăng.",
        content: `
            <p style="margin-bottom: 16px;">Dự án mở rộng VSIP III hứa hẹn sẽ cung cấp thêm quỹ đất sạch, hạ tầng hiện đại cho các nhà đầu tư trong và ngoài nước.</p>
             <h3 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; margin-top: 32px;">Tiêu chuẩn xanh và bền vững</h3>
            ${LOREM_IPSUM}
            <figure style="margin-bottom: 24px;">
                <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1200" alt="Công trường xây dựng VSIP III" style="width: 100%; border-radius: 8px; margin-bottom: 8px;" />
            </figure>
             ${LOREM_IPSUM}
        `,
        date: "2025-07-02",
        image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=600",
    }
];
