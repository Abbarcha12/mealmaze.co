const cardData = [
  {
    id: 1,
    days: " 7 days",
    p1: "7 Days of Meal Plans",
    p2: "Personalised Recipes",
    p3: "Shopping List",
    p4: "Macros per meal",
    p5: "Calories per meal",
    p6: "5 Foodmatch searches",
    amount: "5",
  },
  {
    id: 2,
    days: " 14 days",
    p1: "14 Days of Meal Plans",
    p2: "Personalised Recipes",
    p3: "Shopping List",
    p4: "Macros per meal",
    p5: "Calories per meal",
    p6: "10 Foodmatch searches",
    amount: "10",
  },
  {
    id: 3,
    days: " 21 days",
    p1: "21 Days of Meal Plans",
    p2: "Personalised Recipes",
    p3: "Shopping List",
    p4: "Macros per meal",
    p5: "Calories per meal",
    p6: "20 Foodmatch searches",
    amount: "15",
  },
  {
    id: 4,
    days: " 28 days",
    p1: "28 Days of Meal Plans",
    p2: "Personalised Recipes",
    p3: "Shopping List",
    p4: "Macros per meal",
    p5: "Calories per meal",
    p6: "30 Foodmatch searches",
    amount: "20",
  },
];

const HomeCardData = [
  {
    id: 1,
    title: "Weekly meal plans",
    description:
      "Full Macro and calorie breakdown of every meal so you know what you're eating. ",
    img: 
    <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'>
    <g clip-path='url(#clip0_10194_5085)'>
      <path
        d='M19.0248 1.04395H17.4545C17.4298 0.591573 17.0585 0.231323 16.6 0.231323C16.1414 0.231323 15.7702 0.591573 15.7454 1.04395H11.8562C11.8315 0.591573 11.4602 0.231323 11.0017 0.231323C10.5431 0.231323 10.1718 0.591573 10.1471 1.04395H8.54728C8.08665 1.04395 7.67072 1.38426 7.63978 1.84145C7.60643 2.33439 8.00037 2.7627 8.49572 2.7627H10.1471C10.1718 3.21507 10.5431 3.57532 11.0017 3.57532C11.4602 3.57532 11.8315 3.21507 11.8562 2.7627H15.7454C15.7702 3.21507 16.1414 3.57532 16.6 3.57532C17.0585 3.57532 17.4298 3.21507 17.4545 2.7627H19.0248C19.5232 2.7627 19.9254 3.16489 19.9254 3.66332V5.70864H2.0779V3.66332C2.0779 3.16489 2.48009 2.7627 2.97853 2.7627H4.54878C4.57353 3.21507 4.94478 3.57532 5.40334 3.57532C5.8619 3.57532 6.23315 3.21507 6.26134 2.7627V2.73073C6.26134 2.72557 6.26272 2.7211 6.26272 2.71595V1.0907C6.26272 1.08554 6.26134 1.08107 6.26134 1.07592C6.26134 1.07592 6.26134 1.04395 6.25825 1.04395C6.2335 0.591573 5.86225 0.231323 5.40368 0.231323C4.94512 0.231323 4.57353 0.591573 4.54878 1.04395H2.97853C1.53134 1.04395 0.359154 2.21614 0.359154 3.66332V19.1493C0.359154 20.5965 1.53134 21.7686 2.97853 21.7686H19.0248C20.472 21.7686 21.6442 20.5965 21.6442 19.1493V9.66176C21.6442 9.43384 21.5536 9.21526 21.3924 9.05409C21.2313 8.89293 21.0127 8.80239 20.7848 8.80239C20.5571 8.80329 20.3391 8.89412 20.1781 9.05509C20.0171 9.21606 19.9263 9.43412 19.9254 9.66176V19.1493C19.9254 19.6477 19.5232 20.0499 19.0248 20.0499H2.97853C2.48009 20.0499 2.0779 19.6477 2.0779 19.1493V7.42739H20.4617C21.1148 7.42739 21.6442 6.89801 21.6442 6.24489V3.66332C21.6442 2.21614 20.472 1.04395 19.0248 1.04395Z'
        fill='#16A34A'
      />
      <path
        d='M10.6385 18.0754C10.4972 18.0754 10.3581 18.0405 10.2335 17.9738C10.1088 17.9072 10.0026 17.8109 9.9241 17.6933C9.84561 17.5758 9.79731 17.4408 9.78348 17.3001C9.76965 17.1595 9.79071 17.0176 9.84481 16.8871L12.3899 11.0822H9.20681C8.97889 11.0822 8.7603 10.9916 8.59914 10.8304C8.43798 10.6693 8.34743 10.4507 8.34743 10.2228C8.34743 9.99486 8.43798 9.77627 8.59914 9.61511C8.7603 9.45394 8.97889 9.3634 9.20681 9.3634H13.6756C13.8168 9.36346 13.9559 9.39834 14.0805 9.46497C14.2051 9.53159 14.3113 9.6279 14.3898 9.74537C14.4683 9.86284 14.5166 9.99784 14.5304 10.1384C14.5443 10.279 14.5233 10.4209 14.4693 10.5514L11.4329 17.5443C11.3679 17.7015 11.2577 17.8358 11.1163 17.9303C10.9749 18.0249 10.8086 18.0754 10.6385 18.0754Z'
        fill='#16A34A'
      />
    </g>
    <defs>
      <clipPath id='clip0_10194_5085'>
        <rect width='22' height='22' fill='white' />
      </clipPath>
    </defs>
  </svg>
    ,
  },
  {
    id: 2,
    title: "Weekly meal plans",
    description:
      "An easy step by step instruction to cook your delicious meal. Not sure what ingredients you'll need? We've got you covered! Full ingredients list for all your meals. ",
    img: 
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <g clip-path="url(#clip0_10194_5097)">
      <path d="M29.2905 18.0782H17.3184C17.1294 17.0514 16.735 16.361 16.1427 16.0258C15.7431 15.7997 15.3421 15.7886 15.0554 15.8275C14.921 15.3344 14.562 14.5079 13.6234 14.0678C12.7937 13.6789 12.1446 13.8766 11.7445 14.1663C11.269 13.5318 10.3329 12.7886 9.01115 12.9858C8.16992 13.1113 7.57484 13.6385 7.41934 14.396C7.23723 15.2835 7.67281 16.2625 8.51955 16.9378C8.30521 17.2172 8.13406 17.6132 8.20467 18.0782H1.37744C0.991015 18.0782 0.675605 18.3921 0.674316 18.778C0.670215 19.9901 0.868906 23.0484 2.79705 25.2637C4.12227 26.7863 5.99375 27.5904 8.36252 27.6577C8.53139 28.8475 9.55625 29.7656 10.792 29.7656H19.8761C21.1118 29.7656 22.1366 28.8475 22.3055 27.6577C24.6743 27.5904 26.5457 26.7863 27.871 25.2637C29.7991 23.0484 29.9978 19.9901 29.9937 18.778C29.9924 18.3921 29.6769 18.0782 29.2906 18.0782H29.2905ZM9.2665 17.1774C9.31384 17.1438 9.35212 17.099 9.37792 17.047C9.40373 16.995 9.41625 16.9374 9.41437 16.8794C9.4125 16.8214 9.39629 16.7647 9.36718 16.7145C9.33808 16.6643 9.29699 16.622 9.24758 16.5915C8.29555 16.0041 7.98957 15.1149 8.10811 14.5373C8.20449 14.0677 8.56203 13.7636 9.11486 13.6812C10.6268 13.4551 11.336 14.8218 11.3649 14.8789C11.4207 14.9913 11.5312 15.067 11.6564 15.075C11.7176 15.0793 11.7789 15.0672 11.834 15.0402C11.8891 15.0131 11.9361 14.9719 11.9701 14.9208C12.0161 14.8551 12.4443 14.2916 13.3249 14.7045C14.3156 15.1688 14.4281 16.2414 14.4323 16.2853C14.442 16.3978 14.5036 16.4993 14.6005 16.5574C14.6479 16.586 14.7015 16.603 14.7568 16.6069C14.812 16.6107 14.8674 16.6014 14.9184 16.5796C14.937 16.572 15.3785 16.3965 15.8037 16.6419C16.1766 16.8571 16.4492 17.3506 16.6021 18.0782H14.2319C13.8162 17.8635 11.7204 16.7564 10.4174 15.6037C10.3828 15.5731 10.3426 15.5496 10.2989 15.5346C10.2553 15.5195 10.2091 15.5132 10.163 15.516C10.1169 15.5189 10.0718 15.5307 10.0303 15.551C9.98885 15.5712 9.95175 15.5995 9.92117 15.6341C9.89058 15.6686 9.86709 15.7089 9.85206 15.7525C9.83703 15.7962 9.83074 15.8424 9.83356 15.8885C9.83638 15.9345 9.84825 15.9796 9.86849 16.0211C9.88873 16.0626 9.91694 16.0997 9.95152 16.1303C10.7945 16.8761 11.9205 17.5865 12.7698 18.0782H8.92514C8.77824 17.5561 9.21277 17.2168 9.2665 17.1774ZM19.876 29.0624H10.7919C9.94672 29.0624 9.23938 28.4605 9.07619 27.6628H21.5918C21.4286 28.4605 20.7213 29.0624 19.876 29.0624H19.876ZM27.3405 24.802C26.0943 26.2338 24.2904 26.9597 21.9788 26.9597H8.68912C6.37748 26.9597 4.57355 26.2338 3.32738 24.802C2.30656 23.6292 1.81666 22.157 1.58363 20.9339H23.2008C23.294 20.9339 23.3835 20.8969 23.4494 20.8309C23.5153 20.765 23.5524 20.6756 23.5524 20.5824C23.5524 20.4891 23.5153 20.3997 23.4494 20.3338C23.3835 20.2678 23.294 20.2308 23.2008 20.2308H1.47225C1.39027 19.5895 1.37645 19.0696 1.37738 18.7813L29.2905 18.7804C29.2914 19.0691 29.2776 19.5892 29.1955 20.2308H25.896C25.8028 20.2308 25.7133 20.2678 25.6474 20.3338C25.5815 20.3997 25.5444 20.4891 25.5444 20.5824C25.5444 20.6756 25.5815 20.765 25.6474 20.8309C25.7133 20.8969 25.8028 20.9339 25.896 20.9339H29.0841C28.8511 22.1571 28.3613 23.6293 27.3405 24.802ZM21.6884 15.7777C21.8817 15.7749 22.6021 15.6682 23.6477 15.1149C24.9117 14.4123 25.6428 13.3499 25.7623 12.0424L25.7625 12.0408L25.7631 12.0355C26.0053 9.33546 24.4572 7.53212 24.3912 7.45665C24.3898 7.45513 24.3883 7.45378 24.3869 7.45231C24.3813 7.44617 24.3754 7.44023 24.3694 7.4345C24.2912 7.35851 24.1841 7.31831 24.0757 7.33507C23.9657 7.35206 23.8736 7.41552 23.8222 7.51202L23.8218 7.51278C23.8182 7.51946 23.8143 7.52591 23.8112 7.53294C23.7859 7.57776 23.4376 8.16563 22.0037 9.25138C21.8155 9.39354 21.6349 9.54552 21.4627 9.70671C19.3689 9.00815 16.9766 10.092 16.8723 10.1401C16.752 10.1949 16.6699 10.3204 16.6681 10.4525C16.6671 10.5002 16.6527 11.6334 17.2634 12.8581C17.8298 13.9937 19.0572 15.4219 21.6885 15.7778L21.6884 15.7777ZM19.0887 10.2406L19.3095 11.4044C18.7589 11.1082 18.2098 10.7824 17.8111 10.5387C18.1484 10.4304 18.5938 10.3114 19.0888 10.2406L19.0887 10.2406ZM17.9052 12.5692C17.6374 12.0402 17.5039 11.5239 17.4372 11.1351C18.1248 11.5558 19.2578 12.2199 20.1229 12.5834C20.1455 13.3296 20.4157 14.1093 20.9296 14.9135C19.5218 14.5429 18.5064 13.757 17.9052 12.5692H17.9052ZM23.3237 14.4905C23.0186 14.6618 22.7155 14.7869 22.454 14.877C22.7108 14.3944 22.9438 13.8994 23.1523 13.394C23.469 13.31 24.1483 13.1029 24.9086 12.7066C24.6579 13.4408 24.1277 14.0391 23.3237 14.4905ZM25.0753 11.8025C24.4868 12.1691 23.9004 12.4112 23.4728 12.5591C24.0263 11.0013 24.276 9.62022 24.388 8.73101C24.7501 9.41433 25.1529 10.4892 25.0753 11.8025ZM22.4281 9.81194C22.9732 9.39921 23.3744 9.05075 23.6693 8.76628C23.4871 10.0949 22.9977 12.4554 21.6976 14.795C21.033 13.8543 20.745 12.9724 20.843 12.1688C20.9462 11.3232 21.4794 10.5302 22.4281 9.81194ZM20.9281 10.2863C20.5419 10.7769 20.2931 11.2971 20.1847 11.843C20.1569 11.8304 20.1293 11.818 20.1011 11.8049L19.7929 10.1796C20.1673 10.1697 20.5527 10.1985 20.9282 10.2863H20.9281Z" fill="#16A34A"/>
      <path d="M3.33429 16.7969C4.77517 16.7969 5.94746 15.6246 5.94746 14.1837C5.94746 12.7428 4.77523 11.5706 3.33429 11.5706C1.89336 11.5706 0.72113 12.7428 0.72113 14.1837C0.72113 15.6246 1.89342 16.7969 3.33429 16.7969ZM3.33429 12.2737C4.38752 12.2737 5.24433 13.1305 5.24433 14.1837C5.24433 15.2369 4.38752 16.0938 3.33429 16.0938C2.28107 16.0938 1.42426 15.2369 1.42426 14.1837C1.42426 13.1306 2.28113 12.2737 3.33429 12.2737Z" fill="#16A34A"/>
      <path d="M3.33435 15.2383C3.91589 15.2383 4.38904 14.7652 4.38904 14.1837C4.38904 13.6021 3.91589 13.129 3.33435 13.129C2.75281 13.129 2.27966 13.6021 2.27966 14.1837C2.27966 14.7652 2.75281 15.2383 3.33435 15.2383ZM3.33435 13.8321C3.52818 13.8321 3.68591 13.9898 3.68591 14.1837C3.68591 14.3775 3.52824 14.5352 3.33435 14.5352C3.14046 14.5352 2.98279 14.3775 2.98279 14.1837C2.98279 13.9898 3.14052 13.8321 3.33435 13.8321ZM13.2687 12.2136C13.8502 12.2136 14.3233 11.7404 14.3233 11.1589C14.3233 10.5773 13.8502 10.1042 13.2687 10.1042C12.6871 10.1042 12.214 10.5773 12.214 11.1589C12.214 11.7404 12.6871 12.2136 13.2687 12.2136ZM13.2687 10.8073C13.4625 10.8073 13.6202 10.965 13.6202 11.1589C13.6202 11.3528 13.4625 11.5104 13.2687 11.5104C13.0749 11.5104 12.9171 11.3528 12.9171 11.1589C12.9171 10.965 13.0748 10.8073 13.2687 10.8073ZM28.0836 8.77059C27.5021 8.77059 27.029 9.24374 27.029 9.82528C27.029 10.4068 27.5021 10.88 28.0836 10.88C28.6652 10.88 29.1383 10.4068 29.1383 9.82528C29.1383 9.24374 28.6652 8.77059 28.0836 8.77059ZM28.0836 10.1768C27.8898 10.1768 27.7321 10.0192 27.7321 9.82528C27.7321 9.63139 27.8898 9.47372 28.0836 9.47372C28.2775 9.47372 28.4352 9.63139 28.4352 9.82528C28.4352 10.0192 28.2775 10.1768 28.0836 10.1768ZM27.3805 6.98963C28.8214 6.98963 29.9937 5.81741 29.9937 4.37647C29.9937 2.93553 28.8214 1.76331 27.3805 1.76331C25.9396 1.76331 24.7674 2.93553 24.7674 4.37647C24.7674 5.81741 25.9396 6.98963 27.3805 6.98963ZM27.3805 2.46649C28.4337 2.46649 29.2906 3.32331 29.2906 4.37653C29.2906 5.42975 28.4337 6.28657 27.3805 6.28657C26.3274 6.28657 25.4705 5.42975 25.4705 4.37653C25.4705 3.32331 26.3273 2.46649 27.3805 2.46649Z" fill="#16A34A"/>
      <path d="M27.3824 5.43111C27.964 5.43111 28.4371 4.95797 28.4371 4.37643C28.4371 3.79488 27.964 3.32174 27.3824 3.32174C26.8009 3.32174 26.3277 3.79488 26.3277 4.37643C26.3277 4.95797 26.8009 5.43111 27.3824 5.43111ZM27.3824 4.02486C27.5763 4.02486 27.734 4.18254 27.734 4.37643C27.734 4.57031 27.5763 4.72799 27.3824 4.72799C27.1885 4.72799 27.0309 4.57031 27.0309 4.37643C27.0309 4.18254 27.1886 4.02486 27.3824 4.02486ZM7.6586 6.18551C6.48572 6.66504 6.10809 7.36869 5.99776 7.87453C5.8341 8.62494 6.15959 9.38602 6.55475 9.80742C7.04758 10.333 7.76793 10.1883 8.26662 9.99984C8.32686 10.6642 8.39817 11.6801 9.3836 11.6827C9.72297 11.682 10.0483 11.547 10.2885 11.3072C10.9762 10.6106 10.3156 9.84832 9.89705 9.33322C10.3847 9.11836 11.0003 8.71676 10.9837 7.99652C10.9704 7.41902 10.6694 6.64787 10.027 6.22711C9.59389 5.94352 8.83153 5.70592 7.6586 6.18551ZM9.64176 6.81527C10.0683 7.09465 10.2721 7.63184 10.2808 8.0127C10.2881 8.33016 9.94123 8.59951 9.2203 8.83605C9.21863 8.83659 9.21697 8.83716 9.21531 8.83775C9.21496 8.83775 9.21444 8.83805 9.21408 8.83817C9.13424 8.86571 9.06705 8.92119 9.02489 8.99438C8.95656 9.10793 8.96289 9.26654 9.04375 9.37576C9.14928 9.52928 9.27233 9.67992 9.39139 9.82565C9.89149 10.4377 9.96983 10.631 9.79059 10.8108C9.68201 10.9196 9.5336 10.9802 9.37779 10.9795C9.12402 10.9768 9.04446 10.784 8.97244 9.99697C8.95504 9.80666 8.93705 9.60984 8.90377 9.42387C8.88432 9.31506 8.81418 9.22201 8.71545 9.17221C8.61672 9.1224 8.49971 9.12223 8.40063 9.17121C7.72088 9.50719 7.28483 9.55805 7.06762 9.32643C6.80705 9.04852 6.57608 8.52252 6.68471 8.0243C6.79293 7.52818 7.21006 7.12846 7.92467 6.83631C8.63922 6.5441 9.21696 6.53701 9.64176 6.81527ZM19.3598 4.5658L19.3233 4.6152C18.9396 5.13287 18.3596 5.91527 19.0619 6.55611C19.3144 6.7868 19.6562 6.90774 19.9967 6.88787C20.9458 6.83303 20.9888 5.86014 21.0172 5.21637L21.02 5.15484C21.2431 5.22732 21.5084 5.28949 21.7759 5.28949C22.116 5.28949 22.4591 5.18912 22.7209 4.88215C23.0957 4.44264 23.385 3.66703 23.1862 2.92518C23.0522 2.42508 22.6417 1.74006 21.4476 1.31631C20.2535 0.89256 19.503 1.16561 19.0838 1.46941C18.4618 1.92 18.1975 2.7044 18.2114 3.28195C18.2288 4.00254 18.8629 4.37432 19.3598 4.5658ZM19.4963 2.03877C19.9075 1.74082 20.4849 1.72072 21.2125 1.97889C21.9401 2.23711 22.3756 2.61668 22.507 3.10717C22.639 3.59971 22.4331 4.13602 22.1859 4.42582C21.9797 4.66752 21.5414 4.63717 20.8458 4.33307C20.637 4.23551 20.3733 4.38861 20.3553 4.61877C20.3318 4.8034 20.323 4.99746 20.3148 5.18531C20.2799 5.97486 20.2096 6.17127 19.9561 6.18592C19.8797 6.19006 19.8032 6.17901 19.7311 6.15341C19.659 6.12782 19.5926 6.08818 19.5359 6.0368C19.3485 5.8657 19.4176 5.66889 19.8883 5.03397C20.0021 4.88045 20.1197 4.72172 20.2189 4.56094C20.3433 4.36582 20.2351 4.09535 20.012 4.03729C19.2811 3.83502 18.9221 3.58236 18.9145 3.2649C18.9053 2.88404 19.0834 2.33795 19.4964 2.03877H19.4963ZM6.24449 4.39131C7.34295 4.39934 8.4127 3.75475 8.90852 2.76803C9.2766 2.05594 9.34533 1.24307 9.10211 0.479239C9.0881 0.435249 9.06556 0.394449 9.03578 0.359169C9.006 0.32389 8.96956 0.294821 8.92855 0.273623C8.88754 0.252426 8.84275 0.239513 8.79675 0.235625C8.75074 0.231736 8.70442 0.236946 8.66043 0.250958L3.61123 1.859C3.56724 1.87302 3.52644 1.89556 3.49116 1.92534C3.45588 1.95512 3.42681 1.99155 3.40562 2.03257C3.38442 2.07358 3.37151 2.11837 3.36762 2.16437C3.36373 2.21037 3.36894 2.25669 3.38295 2.30068C3.78906 3.57574 4.9726 4.39131 6.24449 4.39131ZM7.21358 1.44967C7.20548 1.58475 7.16919 1.71664 7.10705 1.83686C7.04866 1.95059 6.96829 2.05161 6.87059 2.13408C6.77289 2.21654 6.6598 2.2788 6.53787 2.31727C6.14477 2.44254 5.73039 2.3032 5.48553 1.99998L7.21358 1.44967ZM4.78856 2.22193C5.08791 2.74529 5.64789 3.06645 6.24362 3.06645C6.41172 3.06645 6.5827 3.0409 6.75121 2.98723C7.17783 2.85135 7.52606 2.55744 7.73166 2.15971C7.88231 1.8682 7.94283 1.54652 7.91114 1.22748L8.51354 1.03565C8.58942 1.51553 8.51119 2.00543 8.28397 2.44512C8.00207 2.99039 7.52477 3.39322 6.93994 3.57949C5.84641 3.92772 4.68104 3.4115 4.18528 2.41406L4.78862 2.22193H4.78856ZM27.8436 13.2006C27.7856 13.179 27.723 13.1731 27.6619 13.1835C27.6009 13.1938 27.5437 13.2201 27.4962 13.2597C27.0159 13.659 26.7824 14.2884 26.8868 14.9022C26.9913 15.516 27.4198 16.0327 28.0052 16.2507C28.0632 16.2723 28.1258 16.2782 28.1868 16.2678C28.2478 16.2574 28.305 16.2311 28.3526 16.1916C28.833 15.7922 29.0665 15.1628 28.962 14.5491C28.8575 13.9353 28.429 13.4186 27.8437 13.2006H27.8436ZM28.0553 15.495C27.806 15.3373 27.6302 15.0795 27.58 14.7843C27.5298 14.4891 27.6104 14.1877 27.7935 13.9563C28.0428 14.1141 28.2186 14.3719 28.2688 14.6671C28.319 14.9623 28.2384 15.2637 28.0553 15.495ZM13.2692 7.30031C13.3861 7.32456 13.5051 7.33677 13.6245 7.33676C14.1187 7.33676 14.5986 7.12805 14.9335 6.75346C15.3485 6.28934 15.4856 5.63221 15.2914 5.03848C15.2721 4.97966 15.2377 4.92696 15.1916 4.88571C15.1454 4.84446 15.0892 4.81613 15.0286 4.80358C14.4169 4.6766 13.7793 4.88625 13.3643 5.35043C12.9493 5.81455 12.8122 6.47174 13.0064 7.06541C13.0257 7.12423 13.0601 7.17693 13.1062 7.21818C13.1524 7.25942 13.2086 7.28776 13.2692 7.30031ZM13.8885 5.81906C14.0881 5.59582 14.374 5.47108 14.669 5.47014C14.701 5.7634 14.6089 6.06158 14.4094 6.28477C14.2097 6.50801 13.9238 6.63275 13.6288 6.63369C13.5968 6.34043 13.6889 6.04231 13.8885 5.81906ZM3.34457 9.46576C3.4064 9.46828 3.4678 9.45444 3.52256 9.42563C3.57733 9.39683 3.62352 9.35408 3.65647 9.3017C3.98905 8.77295 4.01553 8.10223 3.72567 7.55121C3.43574 7.0002 2.86797 6.64213 2.24383 6.61664C2.18198 6.61406 2.12054 6.62788 2.06576 6.6567C2.01097 6.68552 1.96478 6.72832 1.93188 6.78076C1.59936 7.30951 1.57287 7.98029 1.86274 8.53125C2.1526 9.08227 2.72043 9.44033 3.34457 9.46576ZM2.43086 7.35053C2.71686 7.42307 2.96401 7.6135 3.1034 7.87852C3.2428 8.14354 3.25979 8.45508 3.15754 8.73182C2.8716 8.65934 2.62446 8.46885 2.485 8.20389C2.34555 7.93887 2.32862 7.62733 2.4308 7.35059L2.43086 7.35053ZM28.4102 26.9999C28.3441 26.9349 28.255 26.8986 28.1622 26.899C28.0695 26.8994 27.9806 26.9364 27.9151 27.002C27.8495 27.0675 27.8125 27.1564 27.8121 27.2491C27.8117 27.3419 27.848 27.431 27.913 27.4971L28.3285 27.9125C28.3971 27.9812 28.4871 28.0155 28.5771 28.0155C28.6671 28.0155 28.757 27.9812 28.8257 27.9125C28.8916 27.8466 28.9287 27.7572 28.9287 27.664C28.9287 27.5707 28.8916 27.4813 28.8257 27.4154L28.4103 26.9999H28.4102ZM29.2506 25.6864H28.6631C28.5699 25.6864 28.4804 25.7235 28.4145 25.7894C28.3486 25.8553 28.3115 25.9448 28.3115 26.038C28.3115 26.1312 28.3486 26.2207 28.4145 26.2866C28.4804 26.3525 28.5699 26.3896 28.6631 26.3896H29.2506C29.3438 26.3896 29.4332 26.3525 29.4992 26.2866C29.5651 26.2207 29.6021 26.1312 29.6021 26.038C29.6021 25.9448 29.5651 25.8553 29.4992 25.7894C29.4332 25.7235 29.3438 25.6864 29.2506 25.6864ZM26.9205 27.429C26.8273 27.429 26.7379 27.466 26.6719 27.5319C26.606 27.5979 26.569 27.6873 26.569 27.7805V28.368C26.569 28.4613 26.606 28.5507 26.6719 28.6166C26.7379 28.6826 26.8273 28.7196 26.9205 28.7196C27.0138 28.7196 27.1032 28.6826 27.1691 28.6166C27.2351 28.5507 27.2721 28.4613 27.2721 28.368V27.7805C27.2721 27.6873 27.2351 27.5979 27.1691 27.5319C27.1032 27.466 27.0138 27.429 26.9205 27.429Z" fill="#16A34A"/>
      <path d="M24.5493 20.934C24.7434 20.934 24.9008 20.7766 24.9008 20.5824C24.9008 20.3882 24.7434 20.2308 24.5493 20.2308C24.3551 20.2308 24.1977 20.3882 24.1977 20.5824C24.1977 20.7766 24.3551 20.934 24.5493 20.934Z" fill="#16A34A"/>
    </g>
    <defs>
      <clipPath id="clip0_10194_5097">
        <rect width="30" height="30" fill="white" transform="translate(0.334412)"/>
      </clipPath>
    </defs>
  </svg>,
  },
  {
    id: 3,
    title: "Weekly meal plans",
    description:
      "Have spare ingredients but not sure what to make? mealmaze it. Tell us what ingredients you have and we'll tell you what delicious meals you can make. ",
    img: 
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
    <g clip-path="url(#clip0_10194_5112)">
      <path d="M1.44244 19.9785V2.3291H21.2139V12.8577M15.7706 25.7236H7.18756" stroke="#16A34A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23.6399 22.6182H16.1934M18.1085 7.40137H7.65338M15.5206 10.5068H7.65338M11.5896 13.6123H7.65338M17.2596 3.98535V0.776367M13.3053 3.98535V0.776367M9.35104 3.98535V0.776367M5.39674 3.98535V0.776367M26.3897 17.4492C26.3897 18.9367 25.3855 20.1894 24.0179 20.5671V25.7236H15.7704V20.5671C14.4028 20.1894 13.3985 18.9367 13.3985 17.4492C13.3985 15.663 14.8467 14.2148 16.6328 14.2148C16.8086 14.2148 16.9808 14.2291 17.149 14.2561C17.7204 13.3413 18.736 12.7324 19.8941 12.7324C21.0522 12.7324 22.0678 13.3413 22.6392 14.2561C22.8099 14.2286 22.9825 14.2148 23.1554 14.2148C24.9415 14.2148 26.3897 15.663 26.3897 17.4492ZM7.18756 19.9785V25.7236L1.44244 19.9785H7.18756Z" stroke="#16A34A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_10194_5112">
        <rect width="26.5" height="26.5" fill="white" transform="translate(0.6651)"/>
      </clipPath>
    </defs>
  </svg>
,
  },
];

const accordionData = [
  {
    id: 1,
    title: "What are Macros? ",
    content:
      "Macronutrients are the essential nutrients that our bodies require in larger quantities to maintain proper functioning and overall wellbeing. They encompass three primary categories, namely carbohydrates, proteins, and fats.",
  },
  {
    id: 2,
    title: "How does your online meal plan generator work?",
    content:
      "Our online meal plan generator utilizes advanced algorithms and a vast recipe database to create personalized meal plans based on your preferences and requirements. Simply input your dietary preferences, restrictions, and other relevant information, and the generator will create a customized meal plan for you.",
  },
  {
    id: 3,
    title: "Can I customize my meal plan based on my dietary preferences and restrictions?",
    content:
      "Absolutely! Our meal plan generator takes into account your dietary preferences and restrictions. You can specify if you follow a particular diet (e.g., vegetarian, vegan, gluten-free) or if you have any specific allergies or dislikes. The generated meal plan will be tailored to meet your unique needs.",
  },
  {
    id: 4,
    title: "How many meals per day does the generator provide?",
    content:
      "Our meal plan generator can generate meal plans for various frequencies, including three meals a day, or you can specify the number of meals you want per day. It offers flexibility to cater to your desired meal frequency.",
  },
  {
    id: 5,
    title: "Are the recipes provided in the meal plans easy to follow?",
    content:
      "We strive to provide recipes that are user-friendly and easy to follow. Each recipe includes step-by-step instructions, ingredient quantities, and cooking times. We aim to ensure that both beginner and experienced cooks can easily prepare the meals in the generated plans.",
  },
  {
    id: 6,
    title: "Can I specify ingredient preferences or exclude certain ingredients?",
    content:
      "Yes, our meal plan generator allows you to specify ingredient preferences, such as specific proteins, vegetables, or grains you enjoy. You can also exclude ingredients you don't like or are allergic to. The generator will take these preferences into account when generating your meal plan.",
  },
  {
    id: 7,
    title: "Does the meal plan generator consider nutritional balance and variety?",
    content:
      "Absolutely! Our meal plan generator is designed to prioritize nutritional balance and variety. It considers the recommended intake of macronutrients, vitamins, and minerals, and aims to provide a diverse range of ingredients and recipes to ensure a well-rounded meal plan.",
  },
  {
    id: 8,
    title: "Can I generate meal plans for specific durations, like a week or a month?",
    content:
      "Yes, our meal plan generator allows you to generate meal plans for one week, two weeks, three weeks or four weeks. This provides flexibility and convenience in planning your meals ahead of time.",
  },
  {
    id: 9,
    title: "Is nutritional information provided for the generated meal plans?",
    content:
      "Yes, the generated meal plans include nutritional information for each meal. You can easily view details such as calories, carbohydrates, proteins, fats, and other relevant nutritional values to help you track your intake and make informed choices.",
  },
  {
    id: 10,
    title: "Can I download or share the generated meal plans for future reference?",
    content:
      "Absolutely, it's your meal plan! You'll have the options to download or share them. You can even print your mealplan and put them on the fridge.",
  },
  {
    id: 11,
    title: "Are there options for generating meal plans for weight loss or specific health goals?",
    content:
      "Absolutely! Our meal plan generator offers options to generate meal plans tailored to specific health goals, including weight loss, muscle gain, or overall wellness.",
  },
  {
    id: 12,
    title: "How accurate is mealmaze?",
    content:
      "Mealmaze uses one of the most advanced artificial intelligence to power its amazing recipes! The AI is constantly improving so our recipes will only improve and get better! As with any AI, nothings perfect. If you do notice any issues or something’s not right please get in touch at: info@mealmaze.co",
  },
];


export { cardData, HomeCardData,accordionData};