
		
	 
        //filter选项
        $scope.enquiry = {
			merchantCode: [],
			payerName: '', 
			datatimeFrom: null,
			datatimeTo: null,
			status: [],
			type: [],
			fromTransactionAmount: null,
			toTransactionAmount: null,
			bankAccountNumber: '', 
			sdOrderNumber: '', 
		
			//選單-
			merchantCodeData : [],
			merchantCodeSetting : {
				selectionLimit: 1,
				showCheckAll: false,
				showUncheckAll: false,
				scrollableHeight: '500px',
				scrollable: true,
				smartButtonMaxItems: 1,
				closeOnSelect: true, 
				smartButtonTextConverter: function (itemText, originalItem) {
					return itemText;
				}
			},
			merchantCodeText : {
				searchPlaceholder: '',
				buttonDefaultText: $translate.instant('GLOBAL_SELECTBOX_DEFAULT')
			},
			merchantCodeEvents : {
				onItemSelect: function (property) {  
				},
				onItemDeselect: function () {  
				}
			},	
			//選單-
			statusData : [],
			statusSetting : {
				selectionLimit: 1,
				showCheckAll: false,
				showUncheckAll: false,
				scrollableHeight: '500px',
				scrollable: true,
				smartButtonMaxItems: 1,
				closeOnSelect: true, 
				smartButtonTextConverter: function (itemText, originalItem) {
					return itemText;
				}
			},
			statusText : {
				searchPlaceholder: '',
				buttonDefaultText: $translate.instant('GLOBAL_SELECTBOX_DEFAULT')
			},
			statusEvents : {
				onItemSelect: function (property) {  
				},
				onItemDeselect: function () {  
				}
			},	
			//選單-
			typeData : [],
			typeSetting : {
				selectionLimit: 1,
				showCheckAll: false,
				showUncheckAll: false,
				scrollableHeight: '500px',
				scrollable: true,
				smartButtonMaxItems: 1,
				closeOnSelect: true, 
				smartButtonTextConverter: function (itemText, originalItem) {
					return itemText;
				}
			},
			typeText : {
				searchPlaceholder: '',
				buttonDefaultText: $translate.instant('GLOBAL_SELECTBOX_DEFAULT')
			},
			typeEvents : {
				onItemSelect: function (property) {  
				},
				onItemDeselect: function () {  
				}
			},				

			

			 
            //功能
            submitFilter: function () {
				$scope.popupControl = false;
				$scope.isEnquired = true;
				toSearchRecord();
            },
            cancelFilter: function () {			
				$scope.enquiry.merchantCode.length = 0;
				$scope.enquiry.payerName = ''; 
				$scope.enquiry.datetime_from01 = null;
				$scope.enquiry.datetime_to01 = null;
				$scope.enquiry.status.length = 0;
				$scope.enquiry.type.length = 0;
				$scope.enquiry.fromTransactionAmount = null;
				$scope.enquiry.toTransactionAmount = null;
				$scope.enquiry.bankAccountNumber = ''; 
				$scope.enquiry.sdOrderNumber = ''; 
				$scope.isEnquired = false;
				toSearchRecord();
            }
		};
        //filter选项缓存
        $scope.enquiryBackup = {
			merchantCode: [],
			payerName: '', 
			datetime_from01: null,
			datetime_to01: null,
			status: [],
			type: [],
			fromTransactionAmount: null,
			toTransactionAmount: null,
			bankAccountNumber: '', 
			sdOrderNumber: ''
        }; 
        function recoverEnquiry() {
			$scope.enquiry.merchantCode = SDService.findContentByObj($scope.enquiry.merchantCodeData, 'id', $scope.enquiryBackup.merchantCode, 'id');
			$scope.enquiry.payerName = $scope.enquiryBackup.payerName;
			$scope.enquiry.datetime_from01 = $scope.enquiryBackup.datetime_from01;
			$scope.enquiry.datetime_to01 = $scope.enquiryBackup.datetime_to01;
			$scope.enquiry.status = SDService.findContentByObj($scope.enquiry.statusData, 'id', $scope.enquiryBackup.status, 'id');
			$scope.enquiry.type = SDService.findContentByObj($scope.enquiry.typeData, 'id', $scope.enquiryBackup.type, 'id');
			$scope.enquiry.fromTransactionAmount = $scope.enquiryBackup.fromTransactionAmount;
			$scope.enquiry.toTransactionAmount = $scope.enquiryBackup.toTransactionAmount;
			$scope.enquiry.bankAccountNumber = $scope.enquiryBackup.bankAccountNumber;
			$scope.enquiry.sdOrderNumber = $scope.enquiryBackup.sdOrderNumber; 
        };
		
		
		
		
        //日期控制部件
        $scope.dateOnSetTime = dateOnSetTime;
        $scope.startDateBeforeRender = startDateBeforeRender; 
        $scope.endDateBeforeRender = endDateBeforeRender; 
		$scope.clearTime = clearTime;
		function dateOnSetTime(obj) {
			var target = '';
			switch (obj) {
				case 1:
					$scope.enquiry.datetime_from01Msg = null;
					target = 'datetime_from01';
					break;
				case 2: 
					$scope.enquiry.datetime_to01Msg = null;
					target = 'datetime_to01';
					break;		
				default:
					break;		
			}  
			$scope.$broadcast(target);			
		};
        function startDateBeforeRender($dates, endtime) {
            if (endtime) {
                var activeDate = moment(endtime);
                $dates.filter(function (date) {
                    return date.localDateValue() >= activeDate.valueOf()
                }).forEach(function (date) {
                    date.selectable = false;
                })
            }
        };
        function endDateBeforeRender($view, $dates, $leftDate, $upDate, $rightDate, starttime) {
            if (starttime) {
                var activeDate = moment(starttime).subtract(1, $view).add(1, 'minute');
                $dates.filter(function (date) {
                    return date.localDateValue() <= activeDate.valueOf()
                }).forEach(function (date) {
                    date.selectable = false;
                })
            }
        };
        function clearTime(obj) {
			switch (obj) {
				case 1:
					$scope.enquiry.datetime_from01 = null;
					break;
				case 2:
					$scope.enquiry.datetime_to01 = null;
					break;		
				default:
					break;		
			} 
			dateOnSetTime(obj);
            event.stopPropagation();
        };
		
		
				