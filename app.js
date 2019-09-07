$(document).ready(function () {
    var divisionOptions = '';
    var districtOptions = '';
    var supdistrictOptions = '';
    $.getJSON('Bangladesh/Division.json', function (data) {
        divisionOptions += '<option value="">Select Division</option>';
        $.each(data, function (key, division) {
            divisionOptions += '<option value="' + division.id + '">' + division.name + '</option>';
        });
        $('#division').html(divisionOptions);
    });
    $(document).on('change', '#division', function () {
        var division_id = $(this).val();
        if (division_id != '') {
            $.getJSON('Bangladesh/District.json', function (data) {
               districtOptions='<option value="">Select District</option>';
                $.each(data, function (key, district) {
                    if (division_id == district.division_id) {
                        districtOptions += '<option value="' + district.id + '">' + district.name + '</option>';
                    }
                });
                $('#district').html(districtOptions);
            });
        } else {
            $('#district').html('<option value="">Select District</option>');
            $('#subdistrict').html('<option value="">Select Select City</option>');
        }
    });
    $(document).on('change', '#district', function () {
        var district_id = $(this).val();
        if (district_id != '') {
            $.getJSON('Bangladesh/Subdistrict.json', function (data) {
                supdistrictOptions= '<option value="">Select City</option>';
                $.each(data, function (key, subdistrict) {
                    if (district_id == subdistrict.district_id) {
                        supdistrictOptions += '<option value="' + subdistrict.id + '">' + subdistrict.name + '</option>';
                    }
                });
                $('#subdistrict').html(supdistrictOptions);
            });
        } else {
            $('#subdistrict').html('<option value="">Select City</option>');
        }
    });
});