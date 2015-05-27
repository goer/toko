/**
 * Created by goer on 5/21/15.
 */
angular.module('StoreModule',[])

.controller('ProductListCtrl',function($scope){

        $scope.products = [

            {
                image : 'tpl/store/assets/images/recommendation/165x165xaneka-foto_fujifilm-x-m1-xc-16-50-silver_silver_full01.jpg.pagespeed.ic.gtUDucTVBO.jpg'
            },
            {
                image : 'tpl/store/assets/images/recommendation/165x165xleica-store-indonesia_leica-x-typ-113-silver-kamera-digital_full01.jpg.pagespeed.ic.ce4XEIcCBT.jpg'
            },
            {
                image : 'tpl/store/assets/images/recommendation/165x165xmultidimensi_blackvue-sc-300-kamera-motor_full01.jpg.pagespeed.ic.1q0DRfS7UT.jpg'
            },
            {
                image : 'tpl/store/assets/images/recommendation/165x165xnavy-club_navy-club-8175-20-24-28-burgundy-koper-fiber_full01.jpg.pagespeed.ic.WcW60zfBHM.jpg'
            },
            {
                image : 'tpl/store/assets/images/recommendation/165x165xpanasonic-it-comm_panasonic-printer-multifungsi-kx-mb1520_full01.jpg.pagespeed.ic.5MwF2wI9WJ.jpg'
            },
        ]


    })


    .controller('SideMenuCtrl',function($scope){

        $scope.tc = true;

        $scope,toggleCategories = function(){
            console.log('Toggle show categories')
            $scope.tc = !$scope.tc;
        }


        $scope.providers = [

            {
              name: 'VISA',
              point: 120000

            },
            {
                name: 'BCA',
                point: 65660000

            },
            {
                name: 'MANDIRI',
                point: 545000

            },

        ]

        $scope.categories = [

            {
                name : 'Handphone & Tablet'
            },
            {
                name : 'Kesehatan & Kecantikan'
            },
            {
                name : 'Fashion'
            },
            {
                name : 'Elektronik Rumah Tangga'
            },
            {
                name : 'Mainan & Bayi'
            },
            {
                name : 'Komputer & Laptop'
            },
            {
                name : 'Kamera'
            },
            {
                name : 'JamTangan'
            },
            {
                name : 'Perhiasan'
            },
            {
                name : 'Peralatan Rumah Tangga'
            },
            {
                name : 'Otomotif'
            },
            {
                name : 'Groceries'
            },
            {
                name : 'Buku, Games & Musik'
            },
            {
                name : 'Olahraga & Outdoor'
            },

        ]


    })