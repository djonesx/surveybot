(function(root) {
    //	{{{ Help text
    if (!window.Help) { window.Help = {}; }
    // Hide / Show Connection which has not associated with a particular slot module
    Help["conn.show_unassociated"] = "\
    To show the unassociated WAN connections, please click \
    <a href='#' data-handler=\"show_unassociated_conn\">here</a>.\
    ";
    Help["conn.hide_unassociated"] = "\
    To hide the unassociated WAN connections, please click \
    <a href='#' data-handler=\"hide_unassociated_conn\">here</a>.\
    ";
    Help["conn.toggle_unassociated"] = Help["conn.show_unassociated"];
    // WAN Status
    Help["conn.status.pfx"] = "\
    Below are the WAN's basic information.\
    ";
    // Modem Ethernet
    Help["modem_ethernet.to_ethernet"] = "\
    To configure USB port for supported Ethernet adapter, click \
    <a href=\"#\" data-handler=\"switch_on_modem_ethernet\">here</a>\
    ";
    Help["modem_ethernet.to_modem"] = "\
    To restore USB port for USB modem adapter, click \
    <a href=\"#\" data-handler=\"switch_off_modem_ethernet\">here</a>\
    ";
    // Cellular - Bandwidth Settings
    Help["cellular_bandwidth"] = "\
    To configure Bandwidth settings, click \
    <a href=\"#\" class=\"cellular_bandwidth_action\">here</a>\
    ";
    // Independent from Backup WANs
    Help["conn.groupSet"] = "\
    If this is checked, the connection will be working independent from other \
    Backup WAN connections. Those in Backup Priority will ignore the status of \
    this WAN connection, and will be used when none of the other higher priority \
    connections are available.\
    ";
    // Default Route from BGP
    Help["conn.routeFromBgp"] = "\
    Enable this option to ignore this WAN's default gateway. You need to \
    configure a BGP profile over this WAN and advertise default route from BGP \
    peer. Outbound traffic require default gateway to route will not send to \
    this WAN if default route is missing.\
    ";
    // Standby State
    Help["conn.standbyState"] = "\
    This option allows you to choose whether to remain connected when this WAN \
    connection is no longer in the highest priority and has entered the standby \
    state. When <i>Remain connected</i> is chosen, upon bringing up this WAN \
    connection to active, it will be immediately available for use.<br><br>\
    If this WAN connection is charged by connection time, you may want to set \
    this option to <i>Disconnect</i> so that connection will be made only when \
    needed.<br><br>\
    " +
    (!!window.support_mvpn_mode ?
    getSpeedFusionStr() + " may use connected standby WAN for \
    failover if link failure detected on the higher priority WAN, you can set \
    this option to <i>Disconnect</i> to avoid data passing through.\
    " : "");
    // Reply to ICMP PING
    Help["conn.icmpPing"] = "\
    If <i>No</i> is selected, this option is disabled and the system will not \
    reply to any ICMP ping echo requests to the WAN IP addresses of this WAN \
    connection.<br><br>\
    Default: <i>Yes</i>\
    ";
    // Upload Bandwidth
    Help["conn.bandwidth.upload"] = "\
    This field refers to the maximum upload speed.<br><br>\
    This value is referenced when default weight is chosen for outbound traffic \
    and traffic prioritization. A correct value can result in effective traffic \
    prioritization and efficient use of upstream bandwidth.\
    ";
    // Download Bandwidth
    Help["conn.bandwidth.download"] = "\
    This field refers to the maximum download speed.<br><br>\
    Default weight control for outbound traffic will be adjusted according to \
    this value.\
    ";
    // Physical Interface Settings
    // Port Speed
    Help["phy.portSpeed"] = "\
    This is the port speed of the WAN connection. It should be set to the same \
    speed as the connected device in case of any port negotiation \
    problems.<br><br>\
    When a static speed is set, you may choose whether to advertise its speed to \
    the peer device or not. <i>Advertise Speed</i> is selected by default. You \
    can choose not to advertise the port speed if the port has difficulty in \
    negotiating with the peer device.<br><br>\
    Default: <i>Auto</i> \
    ";
    // MTU
    Help["phy.mtu_default"] =
    Help["mtu_default"] = "\
    This field is for specifying the Maximum Transmission Unit value of the WAN \
    connection. An excessive MTU value can cause file downloads stall shortly \
    after connected. You may consult your ISP for the connection's MTU \
    value.\
    ";
    Help["phy.mtu_jumboframe"] = "\
    <br><br>The MTU value can be customized to have \
    value greater than the standard MTU \
    1500 if the connection allows jumbo frame.\
    ";
    // MSS
    Help["phy.mss"] = "\
    This field is for specifying the Maximum Segment Size of the WAN \
    connection.<br><br>\
    When <i>Auto</i> is selected, MSS will be depended on the MTU value. When \
    <i>Custom</i> is selected, you may enter a value for MSS. This value will be \
    announced to remote TCP servers for maximum data that it can receive during \
    the establishment of TCP connections.<br><br>\
    Some Internet servers are unable to listen to MTU setting if ICMP is \
    filtered by firewall between the connections.<br><br>\
    Normally, MSS equals to MTU minus 40. You are recommended to reduce the MSS \
    only if changing of the MTU value cannot effectively inform some remote \
    servers to size down data size.<br><br>\
    Default: <i>Auto</i>\
    ";
    //	MAC Address Clone
    Help["phy.mac"] = "\
    Some service providers (e.g. cable network) identify the client's MAC address \
    and require client to always use the same MAC address to connect to the \
    network. If it is the case, you may change the WAN interface's MAC address to \
    the client PC's one by entering the PC's MAC address to this field. If you \
    are not sure, click the <i>Default</i> button to restore to the default value.\
    ";
    // VLAN
    Help["phy.vlan"] = "\
    Some service providers require the router to VLAN tag Internet traffic. If \
    this is the case, you may enable this option to enter the <i>VLAN ID</i> \
    that your service provider requires.<br><br>\
    Leave this option as disabled unless you have the information from your \
    service provider.\
    ";
    // OpenVPN Uplink Connection Priority
    Help["phy.openvpn_uplink"] = "\
    Specify the order of WAN connections to be used \
    to establish this OpenVPN connection. The healthy \
    WAN with highest priority will be used.<br><br>\
    When Failback on Connection Recovery is enabled, \
    once a higher priority WAN is recovered, OpenVPN \
    connection will be disconnected and use that WAN \
    to establish the connection again.\
    ";
    // Operator Settings
    Help["operator"] = "\
    The device should automatically detect the mobile operator, configure \
    the modem and make connection if you choose Auto. If it has difficulty in \
    making connection, you can select Manual and input your carriers' APN, login \
    ID, Password, and Dial Number settings. Please consult your mobile operator \
    for the values.\
    ";
    // Modem Settings
    Help["modem.dataBearer"] = "\
    This setting allows you to define your preferences of using the 3G and 2G \
    network. 3G networks include HSPA/UMTS. 2G networks include \
    EDGE/GPRS.<br><br>\
    When \"2G only\" or \"3G only\" is chosen, only the EDGE/GPRS or HSPA/UMTS \
    network will be selected respectively. If the chosen network is not \
    available and the other network is, the other network will not be selected. \
    The modem connection will remain offline.<br><br>\
    When \"2G preferred\" or \"3G preferred\" is chosen, the chosen network will \
    be selected whenever available. If it is not available, the other network \
    will be used whenever available.<br><br>\
    Default: <i>3G preferred</i>";
    // Modem Specific - GSM Frequency Band
    Help["modem.gsm"] = "\
    This setting allows you to specify which GSM frequency band to be \
    used.<br><br>\
    <i>GSM1900</i> is used in United States, Canada, and many other countries in \
    the Americas.<br><br>\
    <i>GSM900 / GMS1800 / GSM2100</i> are used in Europe, Middle East, Africa, \
    Asia, Oceania, and Brazil.<br><br>\
    When <i>All Bands</i> is chosen, the appropriate frequency band will be used \
    automatically.<br><br>\
    Default: <i>All Bands</i>\
    ";
    // Cellular Settings
    Help["cellular.settings.pfx"] = "\
    Below are the cellular WAN's settings.\
    ";
    Help["cellular.settings.engineeringData"] = "\
    <br><br>\
    For detailed engineering data, please click \
    <a href='#' data-handler=\"show_cellular_engine_data_panel\">here</a>.\
    ";
    Help["cellular.settings.engineeringSettings"] = "\
    <br><br>\
    For detailed engineering settings, please click \
    <a href='#' data-handler=\"show_cellular_engine_settings_panel\">here</a>.\
    ";
    Help["cellular.settings.resetModule"] = "\
    <br><br>\
    If you want to reset the cellular module, please click \
    <a href='#' data-handler=\"reset_cellular_module\">here</a>.\
    ";
    Help["cellular.settings.useAntenna"] = "\
    <br><br>\
    If you want to configure Cellular WAN Antenna, please click \
    <a href='#' data-handler=\"show_use_antenna_panel\">here</a>.\
    ";
    
    Help["cellular.simCard"] = "\
    To know more about " +
    getSFCStr({ transform_string: "fcrrqFhfvba pbaarpg LTE" }) + "\
    , please click \
    <a href='https://www.peplink.com/services/products-esim-data-plans/' target='_blank'>here</a>.\
    ";
    Help["cellular.carrierSelection"] = "\
    To restrict network on particular carrier, please click \
    <a href='#' data-handler=\"show_cellular_carrier_selection_panel\">here</a>.\
    ";
    Help["cellular.dataBearer"] = "";
    Help["cellular.dataBearer.nr5gBandChannelPci"] = "\
    To restrict 5G SA network on particular Band, Channel, and PCI, please click \
    <a href='#' data-handler=\"show_nr5g_band_channel_pci_panel\">here</a>.\
    ";
    Help["cellular.dataBearer.lteChannelPci"] = "\
    To restrict LTE network on particular Channel and PCI, please click \
    <a href='#' data-handler=\"show_lte_channel_pci_panel\">here</a>.\
    ";
    Help["cellular.dataBearer.optNtw"] = "\
    To configure cellular WAN connecting to the \
    optimal network during a period, please click \
    <a href='#' data-handler=\"show_ntw_panel\">here</a>.\
    ";
    Help["cellular.nr5gBandChannelPci"] = "\
    Band, Channel, and PCI are required to restrict 5G SA network.<br>\
    To remove the restriction, please leave those fields empty.\
    ";
    Help["cellular.lteChannelPci"] = "\
    Channel and PCI are required to restrict LTE network.<br>\
    To remove the restriction, please leave those fields empty.\
    ";
    Help["cellular.optNtw"] = "\
    Cellular WAN by default will only handover from 3G to LTE network when there \
    is no active data traffic, enable this option will make it run the handover \
    procedures after fallback to 3G for a defined effective period, even this \
    may interrupt the connectivity for a short while.\
    ";
    Help["cellular.simpin"] = "\
    To manage the SIM PIN, please click \
    <a href='#' data-handler=\"show_simpin_management\">here</a>.\
    ";
    // Wi-Fi WAN Settings
    Help["wifi.adv"] = "\
    For advanced options, please click \
    " + "<a href=\"#\" data-handler=\"show_wifi_adv_settings\">here</a>" + "\
    ";
    Help["wifi.autoConnect"] = "\
    This option is to specify whether the Wi-Fi WAN will connect to any open \
    mode access points it finds.<br><br>\
    Default: <i>No</i>\
    ";
    
    // Signal Threshold Settings
    Help["signal_threshold.pfx"] = "\
    If signal threshold is defined, this connection will be treated as down when \
    a weaker than threshold signal is determined.\
    ";
    
    Help["signal_threshold.show_adv"] = "\
    <br><br>To define the threshold with specific \
    signal strength values, please click \
    <a href='#' data-handler=\"show_signal_threshold_adv_table\">here</a>.\
    ";
    Help["signal_threshold.hide_adv"] = "\
    <br><br>To define the threshold with signal bar level, please click \
    <a href='#' data-handler=\"hide_signal_threshold_adv_table\">here</a>.\
    ";
    Help["signal_threshold"] = Help["signal_threshold.pfx"] +
    Help["signal_threshold.show_adv"];
    
    // Bandwidth Allowance Monitor
    Help["bam.enable"] = "\
    Check the box <i>Enable</i> to enable bandwidth usage monitoring on this WAN \
    connection for each billing cycle. When this option is not enabled, \
    bandwidth usage of each month is still being tracked but no action will be \
    taken.\
    ";
    Help["bam.action"] = "\
    If <i>Email Notification</i> is enabled, you will receive an email \
    notification when usage hits 75% and 95% of the monthly allowance.<br><br>\
    If the box <i>Disconnect when usage hits 100% of monthly allowance</i> is \
    checked, this WAN connection will be disconnected automatically when the \
    usage hits the monthly allowance. It will not resume unless this option has \
    been turned off or the usage has been reset when a new billing cycle starts.\
    ";
    Help["bam.start"] = "\
    This option allows you to select which day of the month a billing cycle \
    starts. \
    ";
    Help["bam.quota"] = "\
    This field is to specify the bandwidth allowance for each billing cycle.\
    ";
    
    // Subnet Database
    Help["subnetDatabase"] = "\
    Subnet Database will be used for routing control when Location Aware \
    Routing is enabled.<br><br>\
    Information can be uploaded from a text file, with each single line one \
    network in CIDR notation.<br><br>\
    Example:<br>\
    <code>\
    210.11.22.0/24<br>\
    12.33.42.8/29\
    </code><br><br>\
    Subnet Database can be updated or removed even the dialog is cancelled \
    without saving other settings. However, changes will be effective after \
    clicking the 'Apply Changes' button.\
    ";
    // Additional Public IP Settings
    Help["multiip"] = "\
    You may enter public IP addresses (other than the primary IP address) that \
    are assigned by the service provider for this WAN connection in this \
    list.<br><br>\
    Enter the subnet <i>IP Address</i> and <i>Subnet Mask</i>, press the <i>down \
    arrow</i> button, and the list will be populated by the IP addresses of the \
    specified subnet. You should delete the WAN connection's primary IP address \
    and the gateway address from the list by pressing the <i>Delete</i> button \
    after selecting them in the list.<br><br>\
    Under Drop-in mode or IP Forwarding mode, you do not need to enter WAN \
    subnet IP addresses in this list unless they are used for the router's \
    bulit-in DNS server, SNMP agent, or web administration server.\
    ";
    // Wi-Fi Connection Profile
    Help["wifi.connProfile"] = "\
    This table lists out all the saved Wi-Fi Connection Profiles. The <i>Network \
    Name (SSID)</i> and the <i>Security</i> of each profile are \
    displayed.<br><br>\
    To delete a profile, click the icon <i>X</i> located at the end of its row. \
    To edit a profile, click the <i>Network Name</i>. Click <i>Create \
    Profile...</i> to define a new profile. The row order signifies the priority \
    of which profile to be used when <i>Profile Priority</i> is selected for \
    <i>Wi-Fi Association Mode</i>. Drag and drop a row up or down to change the \
    profile order.\
    ";
    
    $(function() {
        $(document.body).on("click", ".cellular_bandwidth_action", function(e) {
            var	ref = $(this).closest("#_tips_obj_").data("context"),
                me = ref ? $(ref).closest("table") : null,
                o;
    
            if (me) {
                o = me.find(".bandwidth_panel");
                o.toggleClass("hide", false);
                nd();
            }
    
            return false;
        });
    });
    // }}}
    // {{{ common function
        var __create_multi_col_flex_row = function(title, content, help_id) {
            return $("<div/>").addClass("flex_row").append(
                $("<div/>").addClass("flex_th").append(
                    !!help_id? $("<div/>").addClass("helpIcon").data("help", help_id): "",
                    title
                ),
                $("<div/>").addClass("flex_td").append(
                    $("<div/>").addClass("tmpl").append(content)
                )
            );
        }
        var	__create_textbox_with_default_btn = function(_param) {
            var	param = _param || {},
                div = $("<div/>");
    
            div.append(
                $("<input/>", {
                    name: param["name"] || "",
                    maxlength: param["maxlength"] || ""
                })
                .attr("size", param["size"] || "40")
                .css({ margin: "0 3px" }),
                $("<button/>", { type: "button" })
                .addClass("icon default_action")
                .text("Default")
                .data("value", param["def_value"] || "")
            )
            .on("click", ".default_action", function(e) {
                var	me = $(e.delegateTarget),
                    v = $(this).data("value") || "";
                me.find("input:first").val(v)
                .prop("disabled", false).show().focus();
            });
            return div;
        }
        var check_signal = function(v, r) {
            return r["min"] <= v && v <= r["max"];
        }
        var signal_info = {
            bar: {
                title: "Acceptable Level",
                range: { min: 0, max: 5 },
                parseValue: function(v) {
                    return parseInt(v, 10);
                }
            },
            wifi_rssi: {
                title: "RSSI",
                placeholder: "n/a",
                range: { min: -192, max: 63 },
                parseValue: function(v) {
                    return parseInt(v, 10);
                },
                unit: "dBm"
            },
            rssi: {
                title: "RSSI",
                placeholder: "n/a",
                range: { min: -124, max: -10 },
                parseValue: function(v) {
                    return parseInt(v, 10);
                },
                unit: "dBm"
            },
            snr: {
                title: "SNR",
                placeholder: "n/a",
                range: { min: -100, max: 100 },
                parseValue: function(v) {
                    return _e(v) ? (+v).toFixed(1) : -999;
                },
                unit: "dB"
            },
            sinr: {
                title: "SINR",
                placeholder: "n/a",
                range: { min: -100, max: 100 },
                parseValue: function(v) {
                    return _e(v) ? (+v).toFixed(1) : -999;
                },
                unit: "dB"
            },
            ecio: {
                title: "Ec/Io",
                placeholder: "n/a",
                range: { min: -31.5, max: 0 },
                parseValue: function(v) {
                    return _e(v) ? (+v).toFixed(1) : -999;
                },
                unit: "dB"
            },
            rsrp: {
                title: "RSRP",
                placeholder: "n/a",
                range: { min: -140, max: -44 },
                parseValue: function(v) {
                    return parseInt(v, 10);
                },
                unit: "dBm"
            },
            rsrq: {
                title: "RSRQ",
                placeholder: "n/a",
                range: { min: -19.5, max: -3 },
                parseValue: function(v) {
                    return _e(v) ? (+v).toFixed(1) : -999;
                },
                unit: "dB"
            },
            rscp: {
                title: "RSCP",
                placeholder: "n/a",
                range: { min: -125, max: -25 },
                validate: function(v) {
                    return -125 <= v && v <= -25;
                },
                parseValue: function(v) {
                    return parseInt(v, 10);
                },
                unit: "dBm"
            }
        }
        var get_signal_strength_display = function(_info, separator) {
            var info = _info || {};
            var signal_o = $.extend({
                _order: [ "wifi_rssi", "rssi", "snr", "sinr", "ecio", "rsrp", "rsrq", "rscp" ]
            }, signal_info);
            var arr = $.map(signal_o["_order"], function(signal_name) {
                var o = signal_o[signal_name];
                var v = o["parseValue"](info[signal_name]);
                if (check_signal(v, o["range"])) {
                    var span = $("<span/>").append(
                        _e(o["title"]) ? [ o["title"], ": " ].join("") : "",
                        [ v, o["unit"] ].join("")
                    ).css({ "padding-right": "10px" });
                    return [span, separator];
                }
            });
            var div = $("<div/>");
            if (_e(arr)) {
                div.append(arr)
                .find("span:last").css({ "padding-right": "0" }).end();
            }
            return div;
        }
    
        // Modem, Cellular
        var	__create_band_selection_panel = function(div, _param) {
                var	param = _param || {},
                    btn = [],
                    o;
    
                if (!div) {
                    div = $("<div/>");
                }
                div.toggleClass("band_selection_panel", true);
    
                div
                .on("reload", function(e, list) {
                    var	me = $(this);
                    me.data("info", list);
                    me.triggerHandler("redraw");
                })
                .on("redraw", function() {
                    var	me = $(this),
                        btn = me.data("btn");
                        list = me.data("list") || [],
                        info = me.data("info") || [],
                        o;
    
                    me.empty();
    
                    if (_e(btn)) {
                        me.append($("<div/>").append(
                            $.map(btn, (o) =>
                                $("<button/>", {
                                    type: "button"
                                })
                                .text(o[0])
                                .data("action", o[1])
                                .addClass("band_selection_action")
                            )
                        ));
                    }
    
                    me.append(create_checkbox(list, {
                        name: "band_list",
                        delimiter: "<br>"
                    }));
                    o = me.find("[name^=band_list]");
                    if (_e(info)) {
                        o = o.filter((_, o) =>
                            $.inArray($(o).val(), info) != -1
                        )
                    }
                    o.prop("checked", true);
    
                    me.triggerHandler("check_action");
                })
                .on("check_action", function() {
                    var	me = $(this),
                        filter = me.data("filter") || [],
                        set, o;
                    set = me.find("[name=band_list]");
                    if (_e(filter)) {
                        o = set.filter((_, o) =>
                            $.inArray($(o).val(), filter) != -1
                        );
                        o.closest("label")
                        .toggleClass("hide", false);
                        set = set.not(o);
                    }
                    set.closest("label")
                    .toggleClass("hide", true);
                })
                .on("export", function(e, silent_mode) {
                    var	me = $(this),
                        err = silent_mode ||
                            silent_mode === undefined ?
                            () => {} : window.err,
                        o, v;
    
                    o = me.find("[name=band_list]:visible");
                    v = o.filter(":checked");
                    if (!_e(v)) {
                        return err("Band Selection cannot be empty!", o.last());
                    }
                    return v.map((_, o) => $(o).val()).get();
                });
    
    
                o = param["buttons"];
                if (o["clear"]) {
                    btn.push([ "Clear", "clear" ]);
                }
                if (o["all"]) {
                    btn.push([ "All", "all" ]);
                }
                if (btn.length) {
                    div
                    .data("btn", btn)
                    .on("click", ".band_selection_action", function(e) {
                        var	checkall;
    
                        switch ($(this).data("action")) {
                        case "clear":
                            checkall = false;
                            break;
                        case "all":
                            checkall = true;
                            break;
                        default:
                            break;
                        }
                        if (typeof(checkall) === "boolean") {
                            $(e.delegateTarget)
                            .find("input:checkbox")
                            .prop("checked", checkall);
                        }
                    });
                }
    
                return div;
            };
    
        var __create_operator_settings_panel = function() {
            var div = $("<div/>").addClass("operator multi_col_flex_tbody")
            .append(
                // Random number is added to radio input name so that they must be in different check group
                __create_multi_col_flex_row("Operator Settings", create_radio_input(
                    "operator_auto_" + get_random_number(), [{
                    text: "Auto",
                    value: "yes",
                    className: "operator_check_action"
                }, {
                    text: "Custom",
                    value: "no",
                    className: "operator_check_action"
                }]), "operator").addClass("ui_cap OPERATOR_SETTINGS"),
                __create_multi_col_flex_row("APN", $("<input/>", { name: "apn" }))
                    .addClass("ui_cap APN"),
                __create_multi_col_flex_row("Username", $("<input/>", { name: "username" }))
                    .addClass("ui_cap USERNAME"),
                __create_multi_col_flex_row("Password", $("<input/>", { type: "password", name: "pwd" }))
                    .addClass("ui_cap PASSWORD"),
                __create_multi_col_flex_row("Confirm Password", $("<input/>", { type: "password", name: "confirm_pwd" }))
                    .addClass("ui_cap PASSWORD"),
                __create_multi_col_flex_row("Dial Number", $("<input/>", { name: "dial_num" }))
                    .addClass("ui_cap DIAL_NUMBER")
            );
            div
            .on("init.operator", function(e, _param) {
                var me = $(this);
                var param = _param || {};
                var port_type = param["port_type"];
            })
            .on("__set.operator", function(e, _info, _autoApnFeeder) {
                var me = $(this);
                var info = _info || {};
                var sim_id = info["sim_id"];
                // var idx = (info["sim_id"] || 1) - 1;
                var arr = me.find(".flex_row").find(".flex_td").filter(function() {
                    return $(this).data("sim_id") == sim_id;
                });
                arr
                .find("[name^=operator_auto]")
                    .filter("[value=\"" +
                        (info["auto"] ? "yes" : "no") +
                    "\"]").prop("checked", true)
                    .end()
                .end()
                .find("[name^=apn]").val(info["apn"]).end()
                .find("[name^=username]").val(info["username"]).end()
                .find("[name^=pwd]").val(info["password"]).end()
                .find("[name^=confirm_pwd]").val(info["password"]).end()
                .find("[name^=dial_num]").val(info["dial_num"]).end();
    
                // [Bug#28883] Auto APN display (from ad-hoc feeder)
                arr.find("._autoApn").detach();
                if (_autoApnFeeder) {
                    $.each([
                        [ "apn", "apn", ],
                        [ "username", "username" ],
                        [ "password", "pwd" ]
                    ], (_, [ t, field ]) => {
                        arr.find("[name^=" + field + "]")
                        .after(
                            _autoApnFeeder
                            .triggerHandler("get", [
                                sim_id,
                                t
                            ])
                            .addClass("_autoApn")
                        )
                    });
                }
            })
            .on("redraw.operator", function() {
                var	me = $(this),
                    o;
    
                // [Bug#28883] Operator Settings "Auto" display
                o = me.find("[name^=operator_auto]").closest(".flex_td");
                o.each((_, td) => {
                    var	o = $(td),
                        sim_id = o.data("sim_id"),
                        td = me.find(".flex_td").filter((_, td) =>
                            $(td).data("sim_id") ===
                            sim_id),
                        is_auto = o
                        .find("[name^=operator_auto]:checked")
                        .val() === "yes";
    
                    td.find("._autoApn").toggleClass("hide", !is_auto);
                });
    
                me.find("[name^=operator_auto]").each(function() {
                    var o = $(this);
                    var is_custom = o.filter(":checked").val() == "no";
                    var sim_id = o.closest(".flex_td").data("sim_id");
                    // Select elements from the same column
                    me.find(".flex_row").find(".flex_td").filter(function() {
                        return $(this).data("sim_id") == sim_id;
                    })
                    .find("[name^=apn], [name^=username], [name^=pwd], [name^=confirm_pwd], [name^=dial_num]")
                        .toggleClass("hide", !is_custom)
                });
            })
            .on("validate.operator", function() {
                var me = $(this);
                var is_valid = true;
                me.find("[name^=operator_auto]:checked").each(function() {
                    var sim_id = $(this).closest(".flex_td").data("sim_id");
                    var panel = me.find(".flex_row").find(".flex_td").filter(function() {
                        return $(this).data("sim_id") == sim_id;
                    });
                    var o, v;
                    if ($(this).val() == "no") {
                        o = panel.find("[name^=apn]");
                        o.val(trim(o.val()));
                        if (!checkSafeFormat(o.val())) {
                            is_valid = false;
                            return err("Invalid APN", o);
                        }
                        o = panel.find("[name^=username]");
                        o.val(trim(o.val()));
                        if (!checkSafeFormat(o.val())) {
                            is_valid = false;
                            return err("Invalid Username", o);
                        }
                        o = panel.find("[name^=pwd]");
                        if (!checkSafeFormat(o.val())) {
                            is_valid = false;
                            return err("Invalid Password", o);
                        }
                        if (o.val() != panel.find("[name^=confirm_pwd]").val()) {
                            is_valid = false;
                            return err("Password does not match", o);
                        }
                        if (o.is(":visible")) {
                            o = panel.find("[name^=dial_num]");
                            o.val(trim(o.val()));
                            if (!checkSafeFormat(o.val())) {
                                is_valid = false;
                                return err("Invalid Dial Number", o);
                            }
                        }
                    }
                });
                return is_valid;
            })
            .on("export.operator", function(e, sim_id) {
                var me = $(this);
                var panel = me.find(".flex_row").find(".flex_td").filter(function() {
                    return $(this).data("sim_id") == sim_id;
                });
                var res, o;
                if (me.is(":visible")) {
                    panel.find("[name^=operator_auto]:checked").each(function() {
                        res = $(this).val() == "yes" ? null : {
                            "apn": panel.find("[name^=apn]").val(),
                            "username": panel.find("[name^=username]").val(),
                            "password": panel.find("[name^=pwd]").val()
                        };
                        if (res != null) {
                            o = panel.find("[name^=dial_num]");
                            if (o.is(":visible")) {
                                res["dialNumber"] = o.val();
                            }
                        }
                    });
                }
                return res;
            })
            .on("click change keyup", ".operator_check_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw");
            })
            return div;
        }
        // Modem, Cellular
        var __create_simpin_panel = function(_create_fn) {
            var div = $("<div/>").addClass("simpin ui_cap SIM_PIN").append(
                // TODO: review password presentation
                __create_multi_col_flex_row("SIM PIN (Optional)", [
                    $("<input/>", {
                        type: "password",
                        name: "sim_pin",
                        maxlength: 8
                    }),
                    $("<div/>").append(
                        $("<input/>", {
                            type: "password",
                            name: "confirm_sim_pin",
                            maxlength: 8
                        }),
                        $("<span/>").text(" (Confirm)")
                    )
                ], "cellular.simpin")
            );
            div
            .on("init.simpin", function(e, _param) {
                var me = $(this);
                var param = _param || {};
                var port_type = param["port_type"];
                me.find(".helpIcon").toggleClass("hide", port_type != "cellular");
            })
            .on("__set.simpin", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var sim_id = info["sim_id"];
                var panel = me.find(".flex_row").find(".flex_td").filter(function() {
                    return $(this).data("sim_id") == sim_id;
                });
                panel
                //.find("[name=sim_pin]:eq(" + idx + ")").val(info["sim_pin"]).end()
                .find("[name^=sim_pin]")
                    .data("init_val", info["sim_pin"])
                    .val(info["sim_pin"])
                .end()
                .find("[name^=confirm_sim_pin]").val(info["sim_pin"]).end()
            })
            .on("validate.simpin", function() {
                var me = $(this);
                var is_valid = true
                // SIM PIN (Optional)
                r = { min: 4, max: 8 };
                me.find("[name^=sim_pin]").each(function() {
                    var o = $(this);
                    o.val(trim(o.val()));
                    if (isempty(o.val()) || o.val() == o.data("init_val")) {
                        // It is valid to leave value empty
                    } else if (!checkSIMPINFormat(o.val())) {
                        // But it is invalid to have value with length outside [min_length,max_length]
                        is_valid = false;
                        return err("Invalid SIM PIN format", o);
                    }
                    if (o.val() != o.closest(".flex_td").find("[name^=confirm_sim_pin]").val()) {
                        is_valid = false;
                        return err("SIM PIN does not match", o);
                    }
                });
                return is_valid;
            })
            .on("export.simpin", function(e, sim_id) {
                var me = $(this);
                var panel = me.find(".flex_row").find(".flex_td").filter(function() {
                    return $(this).data("sim_id") == sim_id;
                });
                var o = panel.find("[name^=sim_pin]");
                var v;
                if (o.is(":visible")) {
                    v = _e(o.val()) ? o.val() : null;
                }
                return v;
            });
            return div;
        }
        var __create_engineering_data_panel = function() {
            var tbody = $("<tbody/>").addClass("engineering_data hide")
            .api_widget({
                func: "status.wan.connection",
                json_parser: function(json) {
                    var conn_id = $(this).data("conn_id");
                    var info = jsonGetObject(json, { "response>.o": {
                        "cellular>": [
                            "manufacturer", "model", "firmware",
                            "hardwareRevision", "voiceNumber",
                            "msid", "prlVersion", "homeSystemId",
                            "homeNetworkId", "homeSystemReg",
                            "foreignSystemIdReg", "foreignNetworkIdReg",
                            "accessOverloadClass", "profile", "profileState",
                            "homeAddress", "primaryHomeAgent", "secondaryHomeAgent",
                            "reverseTunneling", "networkAccessId",
                            "mnhaSpi", "mnaaaSpi", "mnhaSs", "mnaaaSs",
                            "slotCycleIndex", "stationClassMark",
                            "roamingPreference", "dormancyStatus",
                            "carrierAggregation.b", {
                            "romaingStatus>roamingState": [ "message>" ],
                            "cellTower>": [
                                "cellPlmn", "tac", "lac", "cellId", "cellUtranId", "cellEnodebId"
                            ],
                            "rat.a": [
                                "name", {
                                "band.a": [
                                    "name",
                                    "channel.d"
                                ]
                            }]
                        }]
                    }});
                    return info[conn_id] || {};
                }
            })
            .on("__reset.engineering_data", function() {
                var me = $(this);
                me.removeData("conn_id");
                me.removeData("sim_count");
                me.removeData("is_reload");
            })
            .on("init.engineering_data", function(e, _info) {
                var info = _info || {};
                $(this).data({
                    conn_id: info["conn_id"],
                    sim_count: info["sim_count"]
                })
            })
            .on("reload_engine_data_panel.engineering_data", function(e, is_reload) {
                var me = $(this);
                me.data("is_reload", is_reload);
                if (!is_reload) {
                    me.empty().toggleClass("hide", true);
                    return;
                } else {
                    me.triggerHandler("api_reload", [{ id: me.data("conn_id") }, { method: "GET" }])
                    .always(function() {
                        $.wait(5000, this).done(function() {
                            var me = $(this);
                            me.triggerHandler("reload_engine_data_panel", [ me.data("is_reload") ]);
                        });
                    });
                }
            })
            .on("redraw.engineering_data", function() {
                var me = $(this);
                var info = me.data("info");
                var sim_count = me.data("sim_count");
                me.empty().append(
                    create_form_row("Manufacturer", info["manufacturer"]),
                    create_form_row("Model", info["model"]),
                    create_form_row("Firmware", info["firmware"]),
                    create_form_row("Hardware Revision", info["hardwareRevision"]),
                    create_form_row("Voice Number", info["voiceNumber"]),
                    create_form_row("MSID", info["msid"]),
                    create_form_row("PLMN", info["cellPlmn"]),
                    create_form_row("TAC", info["tac"]),
                    create_form_row("LAC", info["lac"]),
                    create_form_row("Cell ID", info["cellId"]),
                    create_form_row("UTRAN Cell ID", info["cellUtranId"]),
                    create_form_row("eNodeB ID", info["cellEnodebId"]),
                    create_form_row("PRL Version", info["prlVersion"]),
                    create_form_row("Home System Idenification", info["homeSystemId"]),
                    create_form_row("Home Network Identification", info["homeNetworkId"]),
                    create_form_row("Home System Registration", info["homeSystemReg"]),
                    create_form_row("Foreign System Identification Registration", info["foreignSystemIdReg"]),
                    create_form_row("Foreign Network Identification Registration", info["foreignNetworkIdReg"]),
                    create_form_row("Access Overload Class", info["accessOverloadClass"]),
                    create_form_row("Profile", info["profile"]),
                    create_form_row("Profile State", info["profileState"]),
                    create_form_row("Home Address", info["homeAddress"]),
                    create_form_row("Primary Home Agent", info["primaryHomeAgent"]),
                    create_form_row("Secondary Home Agent", info["secondaryHomeAgent"]),
                    create_form_row("Reverse Tunneling", info["reverseTunneling"]),
                    create_form_row("Network Access Identifier", info["networkAccessId"]),
                    create_form_row("MN-HA SPI", info["mnhaSpi"]),
                    create_form_row("MN-AAA SPI", info["mnaaaSpi"]),
                    create_form_row("MN-HA SS", info["mnhaSs"]),
                    create_form_row("MN-AAA SS", info["mnaaaSs"]),
                    create_form_row("Slot Cycle Index", info["slotCycleIndex"]),
                    create_form_row("Station Class Mark", info["stationClassMark"]),
                    create_form_row("Roaming Preference", info["roamingPreference"]),
                    create_form_row("Roaming", info["roamingState"]),
                    /*$.map(info["rat"] || [], function(o, i) {
                        var	pfx = _e(o["name"]) ? o["name"] : null;
    
                        return $.map(o["band"] || [], function(o, i) {
                            var	title = [ "Channel" ];
    
                            if (i > 0) {
                                title.unshift("Secondary ");
                                title.push("(SSC" + i + ")");
                            }
                            if (pfx) {
                                title.unshift(pfx);
                            }
                            return create_form_row(title.join(" "), o["channel"])
                        });
                    }),*/
                    create_form_row("Dormancy Status", info["dormancyStatus"])
                ).find("tr").each(function() {
                    var tr = $(this);
                    var td = tr.find("td:eq(1)");
                    td.attr("colspan", sim_count || 1);
                    tr.toggleClass("hide", !_e(td.text()));
                }).end().toggleClass("hide", false);
            })
            return tbody;
        }
        var __create_gobi_engine_dialog = function(conn_id, module_model) {
            var	dlg_name = "__gobi_engine_dialog__",
                dlg = $("<div/>").addClass(dlg_name),
                table = $("<table/>").addClass("form_table"),
                form = $("<form/>").append(
                    create_hidden_input("section", "WWAN_gobo_util"),
                    create_hidden_input("gobo_action", "gobo_engine_info"),
                    create_hidden_input("conn_id", conn_id),
                    table,
                    "(Setting with no value will leave unchanged)",
                    $("<div/>").css({
                        "text-align": "center",
                        padding: "10px 0 0"
                    }).append(
                        $("<button/>", { type: "button" })
                        .addClass("icon apply_action")
                        .text("Apply")
                    )
                );
    
            // Initial Dialog - will be immediately replaced at the end
            $("." + dlg_name).remove();
            dlg
            .data({ conn_id: conn_id })
            .append($("<div/>").append(
                $("<div/>").addClass("loadIcon")
                .css({ margin: "50px auto" })
            ))
            .dialog($.extend(std_dialog_param(), {
                autoOpen: true,
                title: "Engineering Settings",
                width: "600px",
                close: function(event, ui) {
                    $.wait(1000, this).done(function() {
                        $(this).dialog("destroy").remove();
                    });
                }
            }));
    
            table.append(
                $("<tbody/>").toggle(module_model != "mc7750").append(
                    create_form_title("Mobile IP Settings"),
                    create_form_row("Home Address", $("<input/>", {
                        name: "HOME_ADDRESS",
                        size: "16",
                        maxlength: "15"
                    })),
                    create_form_row("Primary Home Agent", $("<input/>", {
                        name: "PRIMARY_HA",
                        size: "16",
                        maxlength: "15"
                    })),
                    create_form_row("Secondary Home Agent", $("<input/>", {
                        name: "SECONDARY_HA",
                        size: "16",
                        maxlength: "15"
                    })),
                    create_form_row("Reverse Tunneling", [
                        $("<label/>").append(
                            $("<input/>", {
                                type: "radio",
                                name: "REV_TUNNELING"
                            }).val("Enabled"),
                            "Enable"
                        ),
                        $("<label/>").append(
                            $("<input/>", {
                                type: "radio",
                                name: "REV_TUNNELING"
                            }).val("Disabled"),
                            "Disable"
                        )
                    ]),
                    create_form_row("Network Access Identifier", $("<input/>", {
                        name: "NAI",
                        size: "50"
                    })),
                    create_form_row("MN-HA SPI", $("<input/>", {
                        name: "HASPI",
                        size: "8"
                    })),
                    create_form_row("MN-AAA SPI", $("<input/>", {
                        name: "AAASPI",
                        size: "8"
                    })),
                    create_form_row("MN-HA SS", $("<input/>", {
                        name: "MNHA",
                        size: "50"
                    })),
                    create_form_row("MN-AAA SS", $("<input/>", {
                        name: "MNAAA",
                        size: "50"
                    }))
                ),
                $("<tbody/>").append(
                    $("<tr/>").addClass("tabletitle").append($("<td/>", { colspan: "2" }).text("CDMA Settings")),
                    create_form_row("ACCOLC", $("<input/>", { name: "ACCOLC", size: "8", maxlength: "2"})),
                    $("<tr/>").addClass("tabletitle").append($("<td/>", { colspan: "2"}).text("Roaming Settings")),
                    create_form_row("Roaming Preference", [
                        $("<label/>").append($("<input/>", { type: "radio", name: "ROAMING" }).val("0"), "Automatic"),
                        "<br/>",
                        $("<label/>").append($("<input/>", { type: "radio", name: "ROAMING" }).val("1"), "Home Only")
                    ]),
                    $("<tr/>").addClass("tabletitle").append($("<td/>", { colspan: "2" }).text("Service Programming Code")),
                    create_form_row("SPC", [
                        $("<input/>", { name: "spc", size: "8", maxlength: "6" }),
                        " (required)"
                    ])
                )
            );
    
            // Actual Dialog - Interaction and Contents
            dlg
            .on("validate_and_apply", function() {
                var	me = $(this),
                    form = me.find("form:first"), o;
                err();
                // Validation - Home Address
                o = form.find("[name='HOME_ADDRESS']");
                o.val(trim(o.val()));
                if (o.val().length && !checkIPFormat(o.val())) {
                    return err("Invalid Home Address", o);
                }
                // Validation - Primary Home Agent
                o = form.find("[name='PRIMARY_HA']");
                o.val(trim(o.val()));
                if (o.val().length && !checkIPFormat(o.val())) {
                    return err("Invalid Primary Home Agent", o);
                }
                // Validation - Secondary Home Agent
                o = form.find("[name='SECONDARY_HA']");
                o.val(trim(o.val()));
                if (o.val().length && !checkIPFormat(o.val())) {
                    return err("Invalid Secondary Home Agent", o);
                }
                // Validation - MN-HA SPI
                o = form.find("[name='HASPI']");
                o.val(trim(o.val()));
                if (o.val().length && !checkInteger(o.val())) {
                    return err("Invalid MN-HA SPI", o);
                }
                // Validation - MN-AAA SPI
                o = form.find("[name='AAASPI']");
                o.val(trim(o.val()));
                if (o.val().length && !checkInteger(o.val())) {
                    return err("Invalid MN-AAA SPI", o);
                }
                // Validation - MN-AAA SPI
                o = form.find("[name='ACCOLC']");
                o.val(trim(o.val()));
                if (o.val().length && !checkIntFormat(o.val(), "0", "15")) {
                    return err("Invalid ACCOLC", o);
                }
                // Validation - SPC
                o = form.find("[name='spc']");
                o.val(trim(o.val()));
                if (!(/^[0-9]{6}$/.test(o.val()))) {
                    return err("SPC must be in 6 digits", o);
                }
    
                // Apply Information
                $.ajax("admin.cgi", {
                    cache: false,
                    type: "POST",
                    data: form.serialize(),
                    context: me
                })
                .then(admin_cgi_filter)
                .done(function() {
                    alert_dialog("Done.").data("dfd")
                    .always(function() {
                        var callback_fn = this.data("callback_func");
                        this.dialog("close");
                        if (callback_fn) {
                            callback_fn();
                        }
                    }.bind(this))
                });
            })
            .on("click", ".apply_action", function(e) {
                $(e.delegateTarget).triggerHandler("validate_and_apply");
                return false;
            })
            .empty().append(form);
            return dlg;
        }
        var	__create_gobi_activate_dialog = function(conn_id, network_mode) {
            var	dlg = $("<div/>").data({
                    next_reload: 0,
                    conn_id: conn_id,
                    size: 50
                });
    
            dlg
            .on("reload_log", function() {
                var	me = $(this),
                    millitime = +new Date,
                    dfd = me;
                if (millitime >= me.data("next_reload")) {
                    me.data("next_reload", millitime+5000);
                    dfd = $.ajax("data.cgi", {
                        cache: false,
                        data: {
                            option: "gobi_util",
                            gobi_action: "activate_log",
                            conn_id: me.data("conn_id"),
                            size: me.data("size")
                        },
                        context: me
                    })
                    .done(function(xml) {
                        var	zb = [ "zb1", "zb2" ],
                            list = xmlGetObject(xml, { "log>.a": ">" }),
                            me = $(this),
                            arr = $.map(list, function(s, i) {
                                return $("<tr/>")
                                .addClass(zb[i%2])
                                .append(
                                    $("<td/>").text(s)
                                );
                            });
                        if (!arr.length) {
                            arr.push($("<tr/>").addClass("tablecontent4").append($("<td/>").css({"text-align":"center"}).text("Log is empty")));
                        }
                        $.fn.append.apply($(this).find(".gobi_activate_log_table").empty(), arr);
                        me
                        .find(".gobi_activate_log_table")
                        .empty().append(arr);
                    });
                }
                $.when(dfd).always(function() {
                    $.wait(500, this).done(function() {
                        this.triggerHandler("reload_log");
                    });
                });
            })
            .on("gobi_activate", function() {
                var	me = $(this),
                    conn_id = me.data("conn_id"),
                    obj = me.find("input[name='gobi_action']"),
                    act_obj = obj.filter(":checked"),
                    spc_obj = me.find("input[name='gobi_spc']"),
                    callback_func = function() { return alert_dialog("Activation request is issued."); };
                err();
                switch (act_obj.val()) {
                case "gobi_init":
                case "gobi_renew":
                    break;
                case "gobi_reset":
                    spc_obj.val(trim(spc_obj.val()));
                    if (!(/^[0-9]{6}$/.test(spc_obj.val()))) {
                        return err("SPC must be in 6 digits.", obj.last());
                    }
                    callback_func = me.data("callback_func");
                    break;
                default:
                    return err("You must specify a Service Activation Option.", obj.last());
                    break;
                }
                $.ajax("admin.cgi", {
                    cache: false,
                    type: "POST",
                    data: {
                        section: "WWAN_gobi_util",
                        gobi_action: act_obj.val(),
                        conn_id: conn_id,
                        spc: spc_obj.val()
                    },
                    context: me
                })
                .then(admin_cgi_filter)
                .done(callback_func);
            })
            .on("click", ".gobi_activate_action", function(e) {
                $(e.delegateTarget).triggerHandler("gobi_activate");
            })
            .on("click", ".log_size_action", function(e) {
                $(e.delegateTarget)
                .data("size", $(this).data("size"))
                .data("next_reload", (+new Date));
                return false;
            });
    
            dlg.append(
                $("<div/>").css({ "padding-bottom":"10px" }).append(
                    "Service Activation Options:", "<br/>",
                    $("<div/>").css({ "padding":"10px" }).append(
                        $("<label/>").append($("<input/>", {
                                type: "radio",
                                name: "gobi_action"
                            }).val("gobi_init"),
                            "Activate Device",
                            "<br/>"
                        ),
                        $("<label/>").append($("<input/>", {
                                type: "radio",
                                name: "gobi_action"
                            }).val("gobi_renew"),
                            "Update Preferred Roaming List (PRL)",
                            "<br/>"
                        ).addClass("mode_sprint_display"),
                        $("<label/>").append($("<input/>", {
                                type: "radio",
                                name: "gobi_action"
                            }).val("gobi_reset"),
                            "Reset to Factory Default",
                            ", SPC Required: ",
                            $("<input/>", {
                                name: "gobi_spc",
                                size: "8",
                                maxlength: "6"
                            }),
                            "<br/>"
                        ).on("click", function() {
                            $(this)
                            .find("input:first").prop("checked", true).end()
                            .find("input:last").focus();
                        })
                    ),
                    $("<button/>", { type: "button" })
                    .addClass("icon gobi_activate_action")
                    .append("Proceed")
                ),
                $("<table/>").addClass("stat_table").append(
                    $("<thead/>").append(
                        $("<tr/>").addClass("tabletitle").append($("<td/>")
                            .text("Log (Auto-Refresh 5 sec)")
                            .prepend($("<div/>").css({"float":"right"}).append(
                                "Show [ ",
                                $("<a/>", { href: "#" }).addClass("linkedName log_size_action").data("size", 50).text("50"),
                                " | ",
                                $("<a/>", { href: "#" }).addClass("linkedName log_size_action").data("size", 100).text("100"),
                                " | ",
                                $("<a/>", { href: "#" }).addClass("linkedName log_size_action").data("size", 0).text("all"),
                                " ]"
                            ))
                        )
                    ),
                    $("<tbody/>").addClass("gobi_activate_log_table").append(
                        $("<tr/>").addClass("tablecontent2").append(
                            $("<td/>").append(
                                $("<div/>").addClass("loadIcon center")
                            )
                        )
                    )
                )
            )
            .find(".mode_sprint_display").toggle(!!(network_mode == "Sprint")).end();
    
            dlg
            .dialog($.extend(std_dialog_param(), {
                autoOpen: true,
                title: [ "Service Activation", "-", network_mode ].join(" "),
                width: "600px",
                close: function(event, ui) {
                    $.wait(1000, this).done(function() {
                        $(this).dialog("destroy").remove();
                    });
                }
            }))
            .triggerHandler("reload_log");
    
            return dlg;
        }
        var __create_manual_carrier_selection_dialog = function(_param) {
            var param = _param || {};
            var tr_tmpl = $("<tr/>").addClass("select_action").append(
                $("<td/>").append($("<input/>", { type: "radio", name: "carrier" })),
                $("<td/>").addClass("carrier_name").css({ "overflow-wrap": "anywhere" }),
                $("<td/>").addClass("carrier_mode")
            );
            var mode_tmpl = $("<span/>").addClass("carrier_mode_span").css({
                padding: "0 3px",
                font: "bold 10px Arial",
                color: "#FFFFFF",
                margin: "3px",
                "background-color": "#7777FF"
            });
            var dialog = $("<div/>").addClass("manual_carrier_select")
            .data({
                "callback": param["callback"],
                "tr_tmpl": tr_tmpl,
                "mode_tmpl": mode_tmpl
            })
            .dialog($.extend(std_dialog_param(), {
                title: "Carrier Selection",
                width: "600px",
                beforeClose: function() {
                    var me = $(this);
                    var reload_id = me.data("reload_id");
                    if (!me.data("enforce_close") && reload_id > 0)
                    {
                        confirm_dialog("Do you want to stop scanning?", "Yes", "No").data("dfd")
                        .done(function() {
                            me.data("enforce_close", true);
                            me.triggerHandler("close_dialog");
                        })
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                },
                buttons: [
                    {
                        text: "OK",
                        "class": "ok_action",
                        click: function() {
                            var me = $(this);
                            var v = me.find("[name^=carrier]:checked").val();
                            if (!!_e(v))
                            {
                                me.triggerHandler("export", v);
                            }
                            me.triggerHandler("close_dialog");
                        }
                    },
                    {
                        text: "Cancel",
                        "class": "cancel_action",
                        click: function() {
                            $(this).dialog("close");
                        }
                    }
                ]
            }))
            .append(
                $("<div/>").addClass("smart_status").append(
                    $("<div/>").append(
                        "The current data session will be disconnected during scanning.",
                        "<br>",
                        "It will take about 1-2 minutes."
                    ).css({ "display": "inline-block", "vertical-align": "middle" }),
                    $("<div/>").append(
                        $("<button/>", { type: "button" }).addClass("icon scan_action").append("Scan")
                    ).css({ "display": "inline-block", "vertical-align": "middle", "margin-left": "5px" })
                ),
                $("<table/>").addClass("stat_table carrier_table").append(
                    $("<thead/>").append(
                        $("<tr/>").addClass("tabletitle2").append(
                            $("<td/>").css({ width: "16px" }),
                            $("<td/>").append("Carrier Name"),
                            $("<td/>").append("Network").css({ width: "150px" })
                        )
                    ),
                    $("<tbody/>").addClass("no_info").append(
                        $("<tr/>").append(
                            $("<td/>", { colspan: 3 }).addClass("tablecontent2 greyText").append("No information").css({ "text-align": "center" })
                        )
                    ).hide(),
                    $("<tbody/>").addClass("loading").append(
                        $("<tr/>").append(
                            $("<td/>", { colspan: 3 }).addClass("tablecontent2 greyText").append(
                                $("<img/>", { src: "../../en/images/dialog-throbber.gif" })
                            ).css({ "text-align": "center" })
                        )
                    ).hide(),
                    $("<tbody/>").addClass("prev_set_carrier").append(
                        tr_tmpl.clone()
                    ).hide(),
                    $("<tbody/>").addClass("carrier_list")
                ).hide(), // .css({ width: "300px", margin: "auto" }).hide(),
                "<br>",
                $("<div/>").addClass("greyText warn_msg").append("Selecting improper carrier may lead to connection failure.").hide()
            )
            .on("open_dialog.manual_carrier_select", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                me.triggerHandler("__reset");
                me.data({
                    "conn_id": info["conn_id"],
                    "sim_id": info["sim_id"],
                    "info": $.extend({
                        id: $.map([ "mcc", "mnc", "pcs" ], function(key) {
                            return info["selected_carrier"][key];
                        }).join("") }, info["selected_carrier"])
                });
                // me.data("info", __callback.data("info"));
                // me.data("__callback", __callback);
                me.triggerHandler("redraw_prev_set_carrier");
                me.triggerHandler("reload");
                me.dialog("open");
            })
            .on("close_dialog.manual_carrier_select", function() {
                var me = $(this);
                if (me.data("reload_id") > 0)
                {
                    me.triggerHandler("stop_scan");
                }
                me.dialog("close");
            })
            .on("__reset.manual_carrier_select", function() {
                var me = $(this);
                me.find(".loading,.prev_set_carrier,.warn_msg").hide();
                me.find(".carrier_table,.no_info").show();
                me.find(".carrier_list").empty().hide();
            })
            .on("process_data.manual_carrier_select", function(e, reload_id) {
                var me = $(this);
                var _data = me.data();
                var prev_set_carrier_info = _data["info"];
                var processed_info = {}, id;
                if (reload_id != _data["reload_id"]) return;
                /*
                _data["scan_result"]["info"].sort(function(a, b) {
                    return (a["name"].length && b["name"].length)?
                        (a["name"] < b["name"]? -1: a["name"] == b["name"]? 0: 1):
                        (b["name"].length - a["name"].length);
                });
                */
                $.each(_data["scan_result"]["info"], function(_, obj) {
                    id = [obj["mcc"], obj["mnc"], obj["pcs"]].join("");
                    if (!processed_info[id])
                    {
                        processed_info[id] = {
                            "id": id,
                            "mcc": obj["mcc"],
                            "mnc": obj["mnc"],
                            "pcs": obj["pcs"],
                            "name": obj["name"],
                            "mobileType": [obj["mobileType"]]
                        };
                    }
                    else
                    {
                        processed_info[id]["mobileType"].push(obj["mobileType"]);
                    }
                });
                $.each(processed_info, function(_, obj) {
                    obj["mobileType"] = obj["mobileType"].sort().join(" ");
                });
                id = prev_set_carrier_info["id"];
                if (processed_info[id] && _e(processed_info[id]["mobileType"]))
                {
                    prev_set_carrier_info["mobileType"] = processed_info[id]["mobileType"];
                }
                return processed_info;
            })
            .on("redraw_prev_set_carrier.manual_carrier_select", function() {
                var me = $(this);
                var _data = me.data();
                var prev_info = _data["info"];
                var prev_name = prev_info["name"];
                var prev_id = prev_info["id"];
                var mode_tmpl = _data["mode_tmpl"];
                var has_info = (!!_e(prev_name) && !!_e(prev_id));
                if (has_info)
                {
                    me.find(".prev_set_carrier")
                    .find("[name^=carrier]").val([prev_info["mcc"], prev_info["mnc"], prev_info["pcs"], prev_info["name"]].join("|")).prop("checked", true).end()
                    .find(".carrier_name").text(prev_info["name"]).end()
                    .find(".carrier_mode").empty().end(); // No carrier mode information is provided in the config tag
                }
                me.find(".prev_set_carrier").toggle(has_info);
                me.find(".no_info").toggle(!has_info);
            })
            .on("redraw.manual_carrier_select", function(e, reload_id) {
                var me = $(this);
                var _data = me.data();
                var tr_tmpl = _data["tr_tmpl"];
                var prev_set_carrier_info = _data["info"];
                var prev_name = prev_set_carrier_info["name"];
                var prev_id = prev_set_carrier_info["id"];
                var processed_info, o;
                var zb;
                var has_info = false;
                me
                .find(".loading").hide().end()
                .closest(".ui-dialog").find(".ok_action").show().end()
                .find(".carrier_table").show().end();
                if (_e(prev_name) && _e(prev_id))
                {
                    me
                    .find(".prev_set_carrier").show()
                        .find(".carrier_mode").empty().end()
                    .end();
                    has_info = true;
                    zb = true;
                }
                if (reload_id != _data["reload_id"]) return;
                if (_data["scan_result"] && _data["scan_result"]["status"] == "done")
                {
                    if (_e(_data["scan_result"]["info"]))
                    {
                        has_info = true;
                        if (reload_id != _data["reload_id"]) return;
                        processed_info = me.triggerHandler("process_data", reload_id);
                        if (reload_id != _data["reload_id"]) return;
                        o = processed_info[prev_set_carrier_info["id"]];
                        if (o)
                        {
                            me.find(".prev_set_carrier .carrier_mode").empty().append(
                                $.map(o["mobileType"].split(" "), function(mode) {
                                    return mode_tmpl.clone().text(mode);
                                })
                            )
                        }
                        me.find(".carrier_list").append(
                            $.map(processed_info, function(obj) {
                                if (prev_set_carrier_info["id"] != obj["id"])
                                {
                                    zb = !zb;
                                    return tr_tmpl.clone().addClass(zb? "zb1": "zb2")
                                    .find("[name^=carrier]").val([obj["mcc"], obj["mnc"], obj["pcs"], obj["name"]].join("|")).end()
                                    .find(".carrier_name").text(obj["name"]).end()
                                    .find(".carrier_mode").empty().append(
                                        $.map(obj["mobileType"].split(" "), function(mode) {
                                            return mode_tmpl.clone().text(mode);
                                        })
                                    ).end();
                                }
                            })
                        ).show();
                        me.find(".warn_msg").show();
                    }
                }
                me.find(".no_info").toggle(!has_info);
            })
            .on("start_scan.manual_carrier_select", function() {
                var me = $(this);
                var reload_id;
                var ajax_data = {
                    "func": "cmd.carrier.scan",
                    "connId": +me.data("conn_id"),
                    "action": "start"
                };
                me.triggerHandler("__reset");
                me.find(".no_info").hide();
                me.find(".loading").show();
                me.triggerHandler("reload", [ undefined, ajax_data ]);
            })
            .on("stop_scan.manual_carrier_select", function() {
                var me = $(this);
                var ajax_data = {
                    "func": "cmd.carrier.scan",
                    "connId": +me.data("conn_id"),
                    "action": "stop"
                };
                var reload_id = -1;
                me.data("reload_id", reload_id);
                me.triggerHandler("reload", [reload_id, ajax_data]);
            })
            .on("export.manual_carrier_select", function(e, val) {
                if (!_e(val)) return;
                var me = $(this);
                var cb = me.data("callback");
                var arr = val.split("|");
                var info = arr.splice(0, 3);
                var name = arr.join("|");
                var carrier = {
                    "id": info.join(""),
                    "mcc": info[0],
                    "mnc": info[1],
                    "pcs": +info[2],
                    "name": name,
                    sim_id: me.data("sim_id")
                }
                cb.triggerHandler("__set_carrier_selection", [ carrier ]);
            })
            .on("reload.manual_carrier_select", function(e, reload_id, ajax_data) {
                var me = $(this);
                if (!reload_id)
                {
                    me.data("reload_id", reload_id = get_random_number());
                }
                if (!ajax_data)
                {
                    ajax_data = {
                        "func": "cmd.carrier.scan",
                        "connId": +me.data("conn_id")
                    }
                }
                if (reload_id != me.data("reload_id")) return;
                $.ajax("api.cgi", {
                    type: "POST",
                    data: ajax_data,
                    cache: false,
                    context: {
                        "me": me,
                        "reload_id": reload_id
                    }
                })
                .then(api_cgi_filter)
                .done(function(json) {
                    var info = jsonGetObject(json, { "response>": [
                        "scanStatus>status", {
                        "list>info.a": [ "mcc", "mnc", "pcs", "mobileType", "name" ]
                        }
                    ]});
                    this["me"].data("scan_result", info)
    
                })
                .always(function() {
                    var me = this["me"],
                        reload_id = this["reload_id"],
                        _data = me.data(),
                        status = _data["scan_result"]["status"];
                    if (this["reload_id"] > 0)
                    {
                        if (status == "done" || status == "not_start")
                        {
                            this["reload_id"] = -1;
                            me.data("reload_id", -1);
                            me.data("enforce_close", true);
                            me.triggerHandler("redraw", this["reload_id"]);
                        }
                        else
                        {
                            $.wait(1000, this).done(function() { this["me"].triggerHandler("reload", this["reload_id"]); });
                        }
                    }
                })
            })
            .on("click", ".select_action", function(e) {
                $(this).find("[name^=carrier]").prop("checked", true);
            })
            .on("click", ".scan_action", function(e) {
                var me = $(e.delegateTarget);
                me.data("enforce_close", false);
                me.closest(".ui-dialog").find(".ok_action").hide();
                $(e.delegateTarget).triggerHandler("start_scan");
            });
            return dialog;
        }
        var __create_remote_sim_discovery_dialog = function(_param) {
                var	param = _param || {},
                    pool = param["simpool"] || [],
                    cb = param["callback"],
                    bag = {},
                    rows = $.map(pool, function(s) {
                        var	comp = s.split(":"),
                            key = comp[0],
                            o = $("<label/>").append(
                                $("<input/>", { type: "checkbox", name: "_ssd" }).val(s).prop("checked", true),
                                $("<span/>").text(key)
                            ).css({
                                "display": "block"
                            });
                        bag[key] = o;
                        return o;
                    }),
                    dlg;
    
            //	Preset Table
                dlg = $("<div/>").append($("<table/>").addClass("form_table").append(
                    $("<tr/>").addClass("tablecontent2").append($("<td/>").append(
                        rows
                    ))
                ));
            //	Dialog Setup
                dlg
                .dialog($.extend(window.std_dialog_param(), {
                    "title": "RemoteSIM Server Detection",
                    "autoOpen": true,
                    "width": "400px",
                    "buttons": {
                        "Update RemoteSIM Settings": function() {
                            var	me = $(this);
                            me.triggerHandler("update");
                            me.dialog("close");
                        },
                        "Cancel": function() {
                            $(this).dialog("close");
                        }
                    },
                    "close": function() {
                        $(this).remove();
                    }
                }));
    
            //	Dialog Interaction
                if (cb) {
                    dlg.data("callback", cb)
                }
                dlg
                .data("pool", pool)
                .data("bag", bag)
                .on("reload", function(e, delay) {
                    var	me = $(this);
    
                    me.find(".loadIcon,.check_action").remove().end()
                    .find(".form_table td").append(
                        $("<div/>").addClass("loadIcon center")
                    );
    
                    $.wait(delay || 0, this)
                    .then(function() {
                        return $.ajax("api.cgi", {
                            "cache": false,
                            "data": {
                                "func": "status.remotesim.discovery"
                            },
                            context: this
                        });
                    })
                    .then(api_cgi_info_filter)
                    .done(function(json) {
                        var	info = jsonGetObject(json, { "response>": [
                                "warn", {
                                "server.o": "portCount.d"
                            }]}),
                            me = $(this),
                            bag = me.data("bag"),
                            rows = $.map(info["server"]["_order"], function(sn) {
                                if (bag[sn]) {
                                    return;
                                }
                                var	o = $("<label/>").append(
                                        $("<input/>", { type: "checkbox", name: "_ssd" }).val(sn),
                                        $("<span/>").text(sn)
                                    ).css({
                                        "display": "block"
                                    });
                                bag[sn] = o;
                                return o;
                            });
                        me.find(".loadIcon,.check_action").remove().end()
                        .find(".form_table td").append(rows).end()
                        .append($("<div/>").append($("<a/>", { href: "#" }).text("Check again").addClass("check_action")));
                    })
                })
                .on("update", function(e) {
                    var	me = $(this),
                        cb = me.data("callback"),
                        arr = me.find("[name=\"_ssd\"]:visible:checked").map(function() {
                            return $(this).val();
                        }).get();
                    if (cb) {
                        try {
                            $(cb).triggerHandler("simpool_callback", [ arr ]);
                        } catch(e) {};
                    }
                })
                .on("click", ".check_action", function(e) {
                    $(e.delegateTarget).triggerHandler("reload", [ 1000 ]);
                    return false;
                });
    
                dlg.triggerHandler("reload");
            }
        // Cellular - Network Mode (i.e. HSPA/Sprint/Verizon) and Profile settings
        var __create_conn_cellular_settings = function() {
            var tbody = $("<tbody/>").addClass("cellular conn_cellular").append(
                create_form_row("Network Mode",
                    $("<div/>").addClass("network_mode_panel")
                ).addClass("ui_cap NETWORK_MODE"),
                create_form_row("Profile Settings",
                    $("<select/>", { name: "cellular_profile" })
                ).addClass("ui_cap PROFILE_SETTINGS hide")
            )
            .on("get_cap.cellular_settings", function(e, mode) {
                var	me = $(this),
                    ui_cap = me.data("ui_cap") || {};
    
                return ui_cap[mode] || ui_cap["default"] || [];
            })
            // Should be called everytime when reopening a cellular WAN dialog
            .on("init.conn_cellular", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                me.data("ui_cap", info["ui_cap"]);
                var antenna = $.map(info["antenna"], function(o) {
                        return o["name"];
                    }).join(", ");
                me.find(".network_mode_panel").empty().append(
                    create_radio_input("network_mode", info["ntw_mode"],
                        { className: "cellular_ntw_mode_action" })
                ).end()
                .find("[name=cellular_profile]").empty().append(
                    create_option_array(
                        $.map($.merge([ "Default" ], info["carrier_profile"]),
                            function(t, v) { return [[ v, t ]]; }
                        )
                    )
                ).end();
            })
            .on("__set.conn_cellular", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                me.data("network_mode", info["network_mode"] || "");
                me.find("[name=network_mode]")
                    .filter("[value=\"" + info["network_mode"] + "\"]")
                    .prop("checked", true)
                    .end()
                .end()
                .find("[name=cellular_profile]")
                    .find("[value=\"" + info["cellular_profile"] + "\"]")
                    .prop("selected", true)
                    .end()
                .end();
            })
            .on("redraw.conn_cellular", function(e) {
                var me = $(this);
                var ntw_mode = me.find("[name=network_mode]:checked").val();
                var panel = me.data("panel") || {};
                var o = panel["cellular_settings"];
                var v = me.find("[name=network_mode]:checked").val();
    
                me.triggerHandler("toggle_ui_cap", [ v ]);
                if (o) {
                    o.triggerHandler("toggle_ui_cap", [ v ]);
                }
                o = panel["signal_threshold"];
                if (o) {
                    o.triggerHandler("toggle_ui_cap", [ v ]);
                }
                o = panel["cellular_settings"];
                if (o) {
                    o.triggerHandler("toggle_ui_cap", [ v ]);
                }
            })
            .on("toggle_ui_cap.conn_cellular", function(e, _network_mode) {
                var me = $(this);
                var network_mode = _network_mode === undefined ?
                    me.data("network_mode") : _network_mode;
                var cap = me.triggerHandler("get_cap", [ network_mode ]);
                var selector = "";
    
                selector = "." + cap.join(", .");
                me.find(".ui_cap").toggleClass("hide", true)
                    .filter(selector).toggleClass("hide", false);
                me.data("network_mode", network_mode);
            })
            .on("export.conn_cellular", function() {
                var me = $(this);
                var o, v;
                var ret = {};
                o = me.find("[name=network_mode]");
                if (o.is(":visible")) {
                    ret["networkMode"] = o.filter(":checked").val();
                }
                o = me.find("[name=cellular_profile]");
                if (o.is(":visible")) {
                    ret["profile"] = o.find("option:selected").val();
                }
                return $.isEmptyObject(ret) ? ret : {
                    cellularModule: ret
                };
            })
            .on("click", ".cellular_ntw_mode_action", function(e) {
                e.stopPropagation();
                nd();
                $(e.delegateTarget).triggerHandler("redraw");
            })
            return tbody;
        }
        // Modem Specific Settings
        var __create_modem_settings_table = function() {
            var panel = {
                operator: __create_operator_settings_panel(),
                simpin: __create_simpin_panel()
            }
            var table = $("<table/>")
            .data({
                panel: panel
            })
            .addClass("form_table sep modem_settings modem").append(
                $("<thead/>").append(
                    create_form_title("Modem Settings")
                ),
                $("<tbody/>").append(
                    create_form_row("Mobile Network Type",
                        $("<select/>", { name: "data_bearer" }).append(
                            create_option_array([
                                [ "", "Auto" ],
                                [ "LTE+3G", "LTE and 3G" ],
                                [ "LTE", "LTE Only" ],
                                // [ "4G", "4G Only" ], This is for WiMax only, should be deprecated
                                [ "3G+2G", "3G and 2G" ],
                                [ "3G", "3G Only" ],
                                [ "2G", "2G Only" ],
                                [ "3G_2G", "3G Preferred" ],
                                [ "2G_3G", "2G Preferred" ]
                            ])
                        ), "modem.dataBearer"
                    ).addClass("ui_cap DATA_BEARER"),
                    create_form_row("GSM Frequency Band",
                        $("<select/>", { name: "gsm_freq_band" }).append(
                            create_option_array([
                                [ "0", "All Bands" ],
                                [ "1", "GSM1900" ],
                                [ "2", "GSM900/GSM1800/WCDMA2100" ]
                            ])
                        ), "modem.gsm"
                    ).addClass("ui_cap HUAWEI_BAND")
                ),
                $("<tbody/>").addClass("multi_col_flex_tbody operator").append(
                    $("<tr/>").addClass("tablecontent2").append(
                        $("<td/>", { colspan: 2 }).append(
                            $("<div/>").addClass("multi_col_flex_bg tabletitle2"),
                            panel["operator"].addClass("multi_col_flex single")
                        )
                    )
                ),
                $("<tbody/>").addClass("multi_col_flex_tbody").append(
                    $("<tr/>").addClass("tablecontent2").append(
                        $("<td/>", { colspan: 2 }).append(
                            $("<div/>").addClass("multi_col_flex_bg tabletitle2"),
                            panel["simpin"].addClass("multi_col_flex single")
                        )
                    )
                )
            )
            .on("init.modem_settings", function(e, _param) {
                var me = $(this);
                var param = _param || {};
                var panel = me.data("panel");
                me.data({
                    ui_cap: param["ui_cap"],
                    supported_data_bearer: param["supported_data_bearer"]
                });
                panel["operator"].triggerHandler("init");
                panel["simpin"].triggerHandler("init");
                me.triggerHandler("toggle_ui_cap");
            })
            .on("__reset.modem_settings", function() {
                var me = $(this);
                var panel = me.data("panel");
                $.each(panel, function(_, o) {
                    $(o).triggerHandler("__reset");
                });
            })
            .on("__set.modem_settings", function(e, _info) {
                var me = $(this);
                var panel = me.data("panel");
                var info = _info || {};
                var n, band = info["huaweiBand"];
                panel["operator"].triggerHandler("__set", [
                    $.extend({
                        auto: !info["operator_custom"]
                    }, info["operator"])
                ]);
                panel["simpin"].triggerHandler("__set", [{
                    sim_pin: info["sim_pin"]
                }]);
                n = 0x03;
                $.each(info["huaweiBand"], function(_, v) {
                    switch (v) {
                    case "GSM1900":
                        n = n & 0x01;
                        break;
                    case "GSM900/GSM1800/WCDMA2100":
                        n = n & 0x02;
                        break;
                    }
                });
                me.find("[name=gsm_freq_band]")
                    .find("[value=\"" + n + "\"]").prop("selected", true);
            })
            .on("redraw.modem_settings", function() {
                var me = $(this);
                var panel = me.data("panel");
                panel["operator"].triggerHandler("redraw");
                me.toggleClass("hide", !me.find("tbody").find("tr:visible").length)
            })
            .on("toggle_ui_cap.modem_settings", function() {
                var me = $(this);
                var ui_cap = me.data("ui_cap");
                var supported_data_bearer = me.data("supported_data_bearer");
                var list;
                var selector = _e(ui_cap) ? "." + ui_cap.join(", .") : "";
    
                // by default hide .ui_cap with no capabilities
                me.find(".ui_cap").closest("tr").toggleClass("hide", true);
                // unhide .ui_cap if there are capabilities based on the selector
                me.find(".ui_cap").filter(selector).closest("tr").toggleClass("hide", false);
    
                if ($.inArray("DATA_BEARER", ui_cap) != -1) {
                    list = me.find("[name=data_bearer]").children().toggleOption(true);
                    if (_e(supported_data_bearer)) {
                        // Need to .find once more times to fetch the correct list of option
                        me.find("[name=data_bearer]").children().filter(function() {
                            return $.inArray($(this).val(), supported_data_bearer) == -1
                        }).toggleOption(false);
                    }
                }
            })
            .on("validate.modem_settings", function() {
                var me = $(this);
                var panel = me.data("panel");
                if (!panel["operator"].triggerHandler("validate") ||
                    !panel["simpin"].triggerHandler("validate")) {
                    return false;
                }
                return true;
            })
            .on("export.modem_settings", function() {
                var me = $(this);
                var panel = me.data("panel");
                var res = {};
                if (me.is(":visible")) {
                    o = panel["operator"].triggerHandler("export");
                    if (o !== undefined) {
                        $.extend(res, { operator: o });
                    }
                    o = panel["simpin"].triggerHandler("export");
                    if (o !== undefined) {
                        $.extend(res, { simPin: o });
                    }
                    o = me.find("[name=data_bearer]");
                    if (o.is(":visible")) {
                        $.extend(res, { mobileType: o.find("option:selected").val() });
                    }
                    o = me.find("[name=gsm_freq_band]");
                    if (o.is(":visible")) {
                        var v = o.find("option:selected").val();
                        var arr = [];
                        if (v == 0 || v == 1) {
                            arr.push("GSM1900");
                        }
                        if (v == 0 || v == 2) {
                            arr.push("GSM900/GSM1800/WCDMA2100");
                        }
                        $.extend(res, { huaweiBand: arr });
                    }
                }
                return $.isEmptyObject(res) ? undefined : res;
            })
            return table;
        }
        // Cellular Specific Settings
        var __create_cellular_settings_table = function() {
            var get_hour_option_list = function() {
                return $.map(new Array(24), function(_, i) {
                    var str = (i < 10? ("0" + i): i) + ":00";
                    return $("<option/>").val(i).text(str);
                });
            };
            var panel = {
                bam: __create_bam_panel(__create_multi_col_flex_row),
                operator: __create_operator_settings_panel(__create_multi_col_flex_row),
                simpin: __create_simpin_panel(__create_multi_col_flex_row)
            };
            var table;
            var div = $("<div/>").addClass("cellular_settings cellular");
    
            div
            .addClass("ctrl")
            .on("show_cellular_engine_settings_panel", function(e) {
                $(this).triggerHandler("toggle_engine_panel", [ true ]);
            })
            .on("show_cellular_carrier_selection_panel", function(e) {
                var	should_show = true;
    
                $(this).find("label.carrier_selection_ui")
                .toggleClass("hide", !should_show);
            })
            .on("show_nr5g_band_channel_pci_panel", function(e, show) {
                $(this)
                .find(".nr5g_band_channel_pci_panel")
                .toggleClass("hide", !(show === undefined || show));
            })
            .on("show_lte_channel_pci_panel", function(e, show) {
                $(this)
                .find(".lte_channel_pci_panel")
                .toggleClass("hide", !(show === undefined || show));
            })
            .on("show_ntw_panel", function(e, show) {
                $(this)
                .find('.opt_ntw_panel')
                .toggleClass('hide', !(show === undefined || show));
            })
            .on("show_simpin_management", function(e) {
                show_simpin_management();
            });
    
            div
            .data({
                "panel": panel,
                "manual_carrier_selection_dialog": __create_manual_carrier_selection_dialog({ callback: div })
            })
            .append(
                $("<table/>").addClass("form_table sep engineering_settings_panel hide").append(
                    create_form_row("Service Activation", [
                        "Click ",
                        $("<a/>", { href: "#" }).addClass("activate_action").text("here"),
                        " to access the advanced menu for activation options."
                    ]).addClass("SERVICE_ACTIVATION ui_cap hide"),
                    create_form_row("Engineering Settings", [
                        "Click ",
                        $("<a/>", { href: "#" }).addClass("engine_action").text("here"),
                        " to modify the engineering data settings."
                    ]).addClass("ENGINEERING_SETTINGS ui_cap hide")
                ),
                $("<table/>").addClass("form_table sep").append(
                    $("<thead/>").append(
                        create_form_title("Cellular Settings", "cellular.settings")
                    ),
                    $("<tbody/>").append(
                        create_form_row("Antenna", $.merge(
                            create_radio_input("external_antenna", {
                                "": "Internal",
                                "yes": "External"
                            }), [
                            $("<div/>").addClass("greyText").text("This is a global setting which will be applied to all cellular WANs.")
                        ])).addClass("ui_cap ANTENNA"),
                        create_form_row("",
                            create_checkbox([{
                                name: "use_antenna"
                            }]), "cellular.useAntenna"
                        ).addClass("use_antenna_panel hide"),
                        // [Bug#25957] SIM Card - Custom Selection
                        create_form_row("SIM Card", [
                            create_radio_input("sim_card_scheme", [{
                                "text": "Alternate between SIM A and SIM B periodically",
                                "value": "alternate",
                                "itemClassName": "multi_sim"
                            }, {
                                "text": "Custom Selection",
                                "value": "custom"
                            }], {
                                className: "check_action",
                                block: true,
                                defaultValue: "custom"
                            }),
                            $("<div/>").addClass("sim_card_custom_selection")
                            .append(create_checkbox($.map([
                                [ "1", [
                                    $("<span/>").text("SIM A").addClass("multi_sim"),
                                    $("<span/>").text("Internal SIM").addClass("single_sim")
                                    ]
                                ],
                                [ "2", "SIM B", "multi_sim" ],
                                [ "remoteSim", "RemoteSIM", "remote_sim" ],
                                [ "fusionSim", "FusionSIM", "fusion_sim" ],
                                // [Bug#26716] SpeedFusion Connect => renamed SpeedFusion Connect LTE [Bug#27836]
                                [ getSFCStr({
                                    transform_string: "fcrrqFhfvba pbaarpg LTE",
                                    letter_style: "snakecase"
                                }), getSFCStr({
                                    transform_string: "fcrrqFhfvba pbaarpg LTE"
                                }), "speedfusion_connect" ],
                                // [Bug#27556] eSIM support
                                [ "eSim1", "BYO eSIM A", "esim_1" ],
                                [ "eSim2", "BYO eSIM B", "esim_2" ]
                            ], function(o) {
                                return {
                                    "value": o[0],
                                    "content": $("<div/>").append(
                                        $("<span/>").append(o[1]),
                                        $("<span/>")
                                        .addClass("sim_priority")
                                        .append(
                                            "Priority: ",
                                            $("<input/>", {
                                                "name": "sim_priority",
                                                "placeholder": "1"
                                            }).attr("size", "2")
                                        )
                                    ),
                                    "itemClassName": o[2]
                                };
                            }), {
                                "name": "sim_card_enable",
                                "__class": "check_action",
                                "defaultValue": "custom"
                            }))
                        ], "cellular.simCard").addClass("ui_cap SIM_CARD"),
    /*
                        create_form_row("SIM Card", create_radio_input("sim_card_scheme", [{
                            text: $("<span/>").append(
                                $("<span/>").addClass("single_sim").text("Internal SIM"),
                                $("<span/>").addClass("multi_sim").text("Both SIMs")),
                            value: "",
                        }, {
                            text: "SIM A Only",
                            value: "1",
                            itemClassName: "multi_sim"
                        }, {
                            text: "SIM B Only",
                            value: "2",
                            itemClassName: "multi_sim"
                        }, {
                            text: "Alternate periodically between SIM A Only and SIM B Only",
                            value: "alternate",
                            itemClassName: "multi_sim"
                        }, {
                            text: "Use RemoteSIM Only",
                            value: "remote_sim",
                            itemClassName: "remote_sim"
                        }], {
                            className: "check_action",
                            block: true,
                            defaultValue: ""
                        })).addClass("ui_cap SIM_CARD"),
    */
                        create_form_row("RemoteSIM Settings", $("<div/>").append(
                            $("<textarea/>", {
                                name: "simpool"
                            }).css({
                                width	: "400px",
                                height: "60px"
                            }),
                            $("<div/>").addClass("simpool_helper").append(
                                $("<a/>", { href: "#" }).text(
                                    "Scan nearby RemoteSIM server"
                                )
                            )
                        )).addClass("remote_sim_panel"),
    /*
                        create_form_row("Preferred SIM Card", create_radio_input("preferred_sim", [{
                            text: "No preference",
                            value: "",
                            className: "check_action"
                        }, {
                            text: "SIM A",
                            value: "1",
                            className: "check_action"
                        }, {
                            text: "SIM B",
                            value: "2",
                            className: "check_action"
                        }])).addClass("preferred_sim_panel ui_cap XXPREFERRED_SIM_CCARD multi_sim"),
    */
                        create_form_row("Failback to Preferred SIM when", [
                            $("<div/>").append(
                                create_checkbox({
                                    failback_idle_sleep: {
                                        value: "",
                                        text: "Device is idle",
                                        __class: "check_action"
                                    }
                                })
                            ).find("[name=failback_idle_sleep]").prop("disabled", true).end(),
                            $("<div/>").addClass("idle_timeout_panel").append(
                                "Idle Timeout: ", $("<input/>", { name: "idle_timeout", maxlength: 2 })
                                    .attr("size", 3)
                            ).css({ "padding-left": "25px" }),
                            $("<div/>").addClass("greyText idle_timeout_panel").text(
                                "Time value is global. A change will affect all WAN profiles."
                            ),
                            $("<div/>").append(
                                create_checkbox({
                                    failback_timeout_enable: {
                                        value: "",
                                        text: "Non-preferred SIM is connected for",
                                        __class: "check_action"
                                    }
                                }),
                                $("<input/>", {
                                    name: "failback_timeout",
                                    maxlength: "3"
                                }).attr("size", "4"),
                                " minutes"
                            )
                        ]).addClass("failback_panel ui_cap XXPREFERRED_SIM_CCARD multi_sim"),
                        create_form_row("SIM Cards Alternate", [
                            $("<div/>").append(
                                "At ",
                                $("<select/>", {
                                    name: "sim_schedule_hour"
                                }).append(
                                    create_option_array($.map(new Array(24), function(_, v) {
                                        var	t = ("0" + v + ":00").slice(-5);
                                        return [[ v, t ]];
                                    }))
                                ),
                                ", ",
                                $("<select/>", {
                                    name: "sim_schedule_day"
                                }).append(
                                    create_option_array($.map(new Array(29), function(_, i) {
                                        var	idx = i + 1,
                                            day_str,
                                            day_val = idx;
                                        switch (idx) {
                                        case 1: case 21:
                                            day_str = idx + "st";
                                            break;
                                        case 2: case 22:
                                            day_str = idx + "nd";
                                            break;
                                        case 3: case 23:
                                            day_str = idx + "rd";
                                            break;
                                        default:
                                            day_str = idx + "th";
                                            break;
                                        case 29:
                                            day_val = 0;
                                            day_str = "Last day";
                                            break;
                                        }
                                        return [[ day_val, day_str ]];
                                    }))
                                ),
                                " of each month",
                                " ",
                                $("<a/>", { "href": "#" }).addClass("sim_schedule_preview_action").text("View Schedule")
                            )
                        ]).addClass("alternate_sim_panel hide")
                    ),
                    $("<tbody/>").addClass("multi_col_flex_tbody sim_settings").append(
                    $("<tr/>").addClass("tablecontent2").append(
                            $("<td/>", { colspan: 2 }).append(
                            $("<div/>").addClass("tabletitle2 multi_col_flex_bg"),
                            $("<div/>").addClass("multi_col_flex").append(
                        __create_multi_col_flex_row("", [
                            $("<div/>").append(
                                $("<div/>").addClass("multi_sim col_title")
                                    .attr("data-multiCol", "1")
                            )
                        ]).addClass("simName"),
                        __create_multi_col_flex_row("Carrier Selection", $.merge(create_radio_input("carrier_selection_auto", [{
                            text: "Auto",
                            value: "yes"
                        }, {
                            text: [
                                "Manual Select ",
                                $("<span/>").addClass("manual_carrier_value").append(
                                        "(", $("<a/>", { href: "#" })
                                        .addClass("manual_carrier_action")
                                        .css({ color: "#0000EE" }),
                                    ")"
                                ).css({ "padding-right": "3px" })
                            ],
                            value: "no",
                            className: "manual_carrier_action check_carrier_selection_action",
                            itemClassName: "carrier_selection_ui hide"
                        }, {
                            text: [
                                "Custom PLMN",
                            ],
                            value: "plmn",
                            itemClassName: "carrier_selection_ui hide"
                        }], {
                            className: "check_carrier_selection_action",
                            delimiter: "<br/>"
                        }), [
                            $("<textarea/>", {
                                name: "carrier_selection_plmn"
                            }).addClass("custom_carrier_selection")
                        ]), "cellular.carrierSelection").addClass("ui_cap CARRIER_SELECTION"),
                        // [Bug#25248] RAT Selection, if present, will override those default choices
                        __create_multi_col_flex_row($("<div/>").addClass("title"), $("<select/>", { name: "data_bearer" })
                            .addClass("band_action").append(
                            create_option_array([
                                [ "", "Auto" ],
                                [ "LTE", "LTE Only" ],
                                [ "3G", "3G Only" ],
                                [ "2G", "2G Only" ]
                            ])
                        ), "cellular.dataBearer").addClass("ui_cap DATA_BEARER")
                        .find("td:first").append($("<div/>").addClass("title")).end(),
                        // [Bug#30970] 5G SA Band / Channel / PCI (Lock)
                        __create_multi_col_flex_row("5G SA Band / Channel / PCI",
                            $("<span/>")
                            .addClass("channel_pci_panel")
                            .append(
                                $("<span/>").text("Band:"),
                                $("<span/>").append($("<select/>", {
                                    name: "nr5g_lock_band" })
                                ),
                                $("<span/>").text("Channel:"),
                                $("<span/>").append($("<input/>", {
                                    name: "nr5g_lock_channel",
                                    maxlength: "7"
                                }).attr("size", "6")),
                                $("<span/>").text("PCI:"),
                                $("<span/>").append($("<input/>", {
                                    name: "nr5g_lock_pci",
                                    maxlength: "4"
                                }).attr("size", "6"))
                            ),
                            "cellular.nr5gBandChannelPci"
                        ).addClass("nr5g_band_channel_pci_panel hide"),
                        // [Bug#30061] LTE Channel / PCI (Lock)
                        __create_multi_col_flex_row("LTE Channel / PCI",
                            $("<span/>")
                            .addClass("channel_pci_panel")
                            .append(
                                $("<span/>").text("Channel:"),
                                $("<span/>").append($("<input/>", {
                                    name: "lte_lock_channel",
                                    maxlength: "5"
                                }).attr("size", "6")),
                                $("<span/>").text("PCI:"),
                                $("<span/>").append($("<input/>", {
                                    name: "lte_lock_pci",
                                    maxlength: "3"
                                }).attr("size", "6"))
                            ),
                            "cellular.lteChannelPci"
                        ).addClass("lte_channel_pci_panel hide"),
                        __create_multi_col_flex_row("Optimal Network Discovery", [
                            $("<input/>", { type: "checkbox", name: "opt_ntw_enable" })
                                .addClass("check_action")
                                .css({ "margin-right": "5px" }),
                            $("<span/>").addClass("opt_ntw_enable_panel").append(
                                 "Every ", $("<select/>", { name: "opt_ntw_interval" }).append(
                                    create_option_array($.map([
                                        5, 10, 30, 60, 120, 240, 480
                                    ], function(v) {
                                        return [[ v, auto_unit(v, "minute") ]];
                                    }))
                                ), " on"
                            ),
                            $("<div/>").addClass("opt_ntw_enable_panel sep").text(
                                "non-optimal network connection"
                            ),
                            $("<div/>").addClass("opt_ntw_enable_panel").append(
                                "Effective Period"
                            ),
                            $("<div/>").addClass("opt_ntw_enable_panel").append(
                                $("<select/>", { name: "opt_ntw_start" }).append(
                                    create_option_array([[ "", "Always" ]]),
                                    get_hour_option_list()
                                ).css({ width: "75px" }).addClass("check_action"),
                                $("<span/>").addClass("opt_ntw_period_panel").append(
                                    " - ",
                                    $("<select/>", { name: "opt_ntw_end" }).append(
                                        get_hour_option_list()
                                    ).css({ width: "75px" })
                                )
                            )
                        ], "cellular.optNtw").addClass("opt_ntw_panel hide"),
                        __create_multi_col_flex_row("Band Selection", [
                            $("<select/>", { name: "band_selection_custom" }).addClass("check_action").append(
                                $("<option/>").val("no").text("Auto"),
                                $("<option/>").val("yes").text("Custom...")
                            ),
                            __create_band_selection_panel(null, {
                                buttons: {
                                    clear: true,
                                    all: true
                                }
                            })
                        ]).addClass("ui_cap BAND_SELECTION"),
                        __create_multi_col_flex_row("Data Roaming", [
                            $("<input/>", { type: "checkbox", name: "data_roaming_enable" })
                                .addClass("check_action")
                                .css({ "margin-right": "5px" }),
                            $("<select/>", { name: "data_roaming_mode" })
                                .addClass("check_action ui_cap DATA_ROAMING_CONTROL_LIST").append(
                                $("<option/>").val("").text("Any countries"),
                                $("<option/>").val("whitelist").text("Allowed countries"),
                                $("<option/>").val("blacklist").text("Deny countries")
                            ),
                            $("<textarea/>", {
                                name: "data_roaming_acl",
                                placeholder: "Enter Mobile Country Codes (each separated by space)",
                                cols: 25, rows: 4
                            }).addClass("ui_cap DATA_ROAMING_CONTROL_LIST")
                            .css({ "margin-top": "3px", display: "block" })
                        ]).addClass("ui_cap DATA_ROAMING"),
                        __create_multi_col_flex_row("Authentication",
                            $("<select/>", { name: "auth" }).append(
                                $("<option/>").val("").text("Auto"),
                                $("<option/>").val("pap").text("PAP Only"),
                                $("<option/>").val("chap").text("CHAP Only")
                            )
                        ).addClass("ui_cap AUTHENTICATION"),
                        $("<div/>").append(
                            panel["operator"]
                        ).addClass("multi_col ui_cap OPERATOR_SETTINGS"),
                        $("<div/>").append(
                            panel["simpin"]
                        ).addClass("multi_col SIM_PIN"),
                        $("<div/>").append(
                            panel["bam"]
                        ).addClass(
                            !!window.operating_mode_as_bridge ?
                            "hide" :
                            "multi_col ui_cap BANDWIDTH_ALLOWANCE_MONITOR")
                    )))).attr("data-multiCol", "1"),
                    // [Bug#22655] Hide "Bandwidth Allowance" from device in bridge mode
                )
                .find("tbody.multi_col").attr("data-multiCol", 1).end()
            );
            div
            .find("tbody.multi_col tr td").css({ "vertical-align": "top" }).end()
            div
            .on("get_cap.cellular_settings", function(e, mode) {
                var	me = $(this),
                    ui_cap = me.data("ui_cap") || {};
    
                return ui_cap[mode] || ui_cap["default"] || [];
            })
            .on("init.cellular_settings", function(e, _param) {
                var me = $(this);
                var param = _param || {};
                var sim_count = param["sim_count"] || 1;
                var panel = me.data("panel");
                var trs = me.find(".multi_col tr:not(.tabletitle2)");
                var title_tr = me.find(".multi_col tr.tabletitle2");
                var sfc_sim_value = getSFCStr({
                    transform_string: "fcrrqFhfvba pbaarpg LTE",
                    letter_style: "snakecase"
                });
                var	o;
                var simNameMap = $.map(new Array(sim_count), function(_, i) {
                    var sim_id = i + 1;
                    return {
                        value: sim_id,
                        simName: "SIM " + String.fromCharCode(64 + sim_id)
                    };
                });
                if (param["supportRemoteSim"]) {
                    simNameMap.push({
                        value: "remoteSim",
                        simName: "RemoteSIM"
                    });
                }
                if (param["supportFusionSim"]) {
                    simNameMap.push({
                        value: "fusionSim",
                        simName: "FusionSIM"
                    });
                }
                if (param["support_speedfusion_connect"]) {
                    simNameMap.push({
                        value: sfc_sim_value,
                        simName: getSFCStr({
                            transform_string: "fcrrqFhfvba pbaarpg LTE"
                        })
                    })
                }
                if (param["supportESim1"]) {
                    simNameMap.push({
                        value: "eSim1",
                        simName: "BYO eSIM A"
                    })
                }
                if (param["supportESim2"]) {
                    simNameMap.push({
                        value: "eSim2",
                        simName: "BYO eSIM B"
                    })
                }
                // Store the UI capability
                me.data({
                    ui_cap: param["ui_cap"],
                    simNameMap: simNameMap,
                    supported_data_bearer: param["supported_data_bearer"],
                    band_info: param["band_info"],
                    module_model: param["module_model"],
                    supportRemoteSim: param["supportRemoteSim"],
                    supportFusionSim: param["supportFusionSim"],
                    // [Bug#27556] eSIM support
                    supportESim1: param["supportESim1"],
                    supportESim2: param["supportESim2"],
                    // [Bug#26716] SpeedFusion Connect support => renamed SpeedFusion Connect LTE [Bug#27836]
                    support_speedfusion_connect: param["support_speedfusion_connect"],
                    sim_count: sim_count
                });
                Help["cellular.useAntenna"] = _e(param["antennaHelpText"]) ? ("Limitation" +
                    (param["antennaHelpText"].length > 1 ? "s" : "") + ":<br>" +
                    param["antennaHelpText"].map(function(v) {
                        return (" - " + v);
                    }).join("<br>")) : undefined;
                me
                .find(".use_antenna_panel")
                .find(".tabletitle2 .helpIcon").toggleClass("hide", !_e(Help["cellular.useAntenna"])).end()
                .find(".tabletitle2 .form_field").text(
                    "Use Antenna " + ($.map(param["antenna"], function(o) {
                        return o["name"];
                    }).join(", ")) + " only"
                ).end()
                .find("[name=use_antenna]").val(
                    $.map(param["antenna"], function(o) {
                        return o["value"];
                    }).join(" ")
                )
                .end()
                me.find(".sim_card_custom_selection").empty().append(
                    create_checkbox($.map(simNameMap, function(o) {
                        return $.extend({
                            content: $("<div/>").append(
                                $("<span/>").append(o["simName"]),
                                $("<span/>")
                                .addClass("sim_priority")
                                .append(
                                    "Priority: ",
                                    $("<input/>", {
                                        "name": "sim_priority",
                                        "placeholder": "1"
                                    }).attr("size", "2")
                                )
                            )
                        }, o);
                    }), {
                        "name": "sim_card_enable",
                        "__class": "check_action",
                        "defaultValue": "custom"
                    })
                )
                // Reset to single column
                me.find(".flex_row").each(function() {
                    $(this).find(".flex_td").slice(1).remove();
                })
                /*
                trs.find("td:gt(1)").remove();
                title_tr.find("div.col_title").not(":first").remove();
                // Create the 2nd, 3rd... column on the fly
                trs.find("td:last").data("sim_id", 1)
                    .attr("data-multiCol", 1);
                title_tr.toggleClass("hide", sim_count <= 1)
                    .find("div.col_title").text("SIM Card A")
                    .attr("data-multiCol", 1);
                    */
                me.find(".multi_col_flex").toggleClass("single", simNameMap.length == 1);
                me.find(".flex_row").each(function(i) {
                    var r = $(this);
                    var tmpl = r.find(".flex_td").last();
                    $.each(simNameMap, function(j, o) {
                        if (r.hasClass("simName") && j == 0) {
                            tmpl.find(".tmpl").text(
                                o["simName"]
                            )
                            return;
                        }
                        if (j == 0) {
                            tmpl.data("sim_id", o["value"]);
                            return;
                        }
                        var td = tmpl.clone(true);
                        if (r.hasClass("simName")) {
                            td.find(".tmpl").text(
                                o["simName"]
                            )
                        }
                        td.data("sim_id", o["value"]);
                        if (o["value"] == sfc_sim_value) {
                            if (r.hasClass("AUTHENTICATION") ||
                                _e(r.closest(".OPERATOR_SETTINGS")) ||
                                _e(r.closest(".SIM_PIN"))) {
                                td.text("-");
                            }
                        }
                        if (o["value"] == "remoteSim" ||
                            o["value"] == "fusionSim") {
                            if (r.hasClass("AUTHENTICATION") ||
                                r.hasClass("DATA_ROAMING") ||
                                _e(r.closest(".OPERATOR_SETTINGS")) ||
                                _e(r.closest(".SIM_PIN")) ||
                                _e(r.closest(".BANDWIDTH_ALLOWANCE_MONITOR"))) {
                                td.text("-");
                            }
                        }
                        td.find("input:radio").each(function() {
                            var name = $(this).attr("name");
                            $(this).attr("name", name + o["value"]);
                        });
                        r.append(td);
                    })
                });
                /*
                if (sim_count > 1) {
                    $.each(new Array(sim_count - 1), function(i) {
                        var td = trs.find("td:last").clone(true);
                        var sim_id = i + 2;
                        var sfx = "_" + sim_id;
                        title_tr.find("td").last().find("div").first().append(
                            title_tr.find("div.col_title").clone()
                            .text("SIM Card " + String.fromCharCode(64 + sim_id))
                            .attr("data-multiCol", sim_id)
                        );
                        trs.each(function(j) {
                            // Selection radio button, rename is needed
                            $(td[j])
                            .data("sim_id", sim_id)
                            .attr("data-multiCol", sim_id)
                            .find("input:radio").each(function() {
                                var o = $(this);
                                var name = o.attr("name") + sfx;
                                o.attr("name", name);
                            }).end()
                            $(this).append(td[j]);
                        })
                    });
                }*/
                // Change thead colspan according to SIM Count
                /*
                me.find("thead tr")
                    .find("td:last").attr("colspan", sim_count + 1);
                me.find(".multi_col tr.tabletitle2")
                    .find("td:last").attr("colspan", sim_count + 1);
                // Change tbody colspan according to SIM Count
                me.find("tbody:not(.multi_col) tr")
                    .find("td:last").attr("colspan", sim_count);
                // Set with for multiple columns td
                me.find(".multi_col tr:not(.tabletitle2)").find("td:gt(0)").css({
                    width: (70 / sim_count) + "%"
                })
                */
                // Toggle UI according to SIM Count
                me.find(".multi_sim").toggleClass("hide", sim_count <= 1);
                me.find(".single_sim").toggleClass("hide", sim_count > 1);
                panel["operator"].triggerHandler("init", [{
                    port_type: "cellular"
                }]);
    
                description_list = param["band_info"]["description"];
                // [Bug#30970] Initialize 5G SA Band (lock)
                var mode = param["module_model"].toUpperCase();
                var type = me.data("network_mode");
                var list = me.triggerHandler("get_band_list", [ mode, type, "5G" ]);
                var option_list = $.map(description_list, function(o) {
                    return $.inArray(o["value"], list) != -1 ?
                        [ [ o["value"], o["text"] ] ] : null;
                });
                option_list.unshift([ "", "---" ]);
                me.find("[name=nr5g_lock_band]").each(function() {
                    $(this).empty().append(create_option_array(option_list));
                });
                // Initialize Band Selection List
                me.find(".band_selection_panel").each(function() {
                    $(this).data("list", description_list);
                    $(this).triggerHandler("redraw");
                });
                // me.triggerHandler("redraw_band_selection");
    
                me.find(".remote_sim").toggleClass("hide", !param["supportRemoteSim"]);
                me.find(".fusion_sim").toggleClass("hide", !param["supportFusionSim"]);
                // [Bug#27556] eSIM support
                me.find(".esim_1").toggleClass("hide", !param["supportESim1"]);
                me.find(".esim_2").toggleClass("hide", !param["supportESim2"]);
                me.find(".SIM_CARD .tabletitle2 .helpIcon").toggleClass("hide", !param["support_speedfusion_connect"]);
                panel["bam"].triggerHandler("init");
            })
            .on("__set.cellular_settings", function(e, _info) {
                var me = $(this);
                var info = _info || {};
    //			var sim_card_scheme = info["simCardScheme"];
                var idle_timeout = parseInt(info["idle_timeout"] / 60, 10);
                var r = { min: 1, max: 99 };
                var panel = me.data("panel");
                var	o, v, is_enable;
                var	obj;
                var	cap = me.triggerHandler("get_cap", [ info["network_mode"] ]);
    
                var	supportRemoteSim = !!me.data("supportRemoteSim");
                var	supportFusionSim = !!me.data("supportFusionSim");
                // [Bug#27556] eSIM support
                var	supportESim1 = !!me.data("supportESim1");
                var	supportESim2 = !!me.data("supportESim2");
                // [Bug#26716] SpeedFusion Connect support => renamed SpeedFusion Connect LTE [Bug#27836]
                var	support_speedfusion_connect = !!me.data("support_speedfusion_connect");
    
                // [Bug#28883] Ad-hoc hack on Cellular WAN's Auto APN information fetching
                o = $("<div/>")
                .api_widget({
                    func: "status.wan.connection",
                    data: {
                        id: _info["conn_id"]
                    },
                    json_parser: function(json) {
    
                        var	info = jsonGetObject(json, { "response>.o": {
                            "cellular>": {
                                "sim>.o": [
                                    "autoApn.b",
                                    "apn",
                                    "username",
                                    "password"
                                ]
                            }
                        }});
                        return info;
    
                    }
                })
                .on("get", function(e, sim_id, type) {
                    var	me = $(this),
                        v, o;
    
                    v = [ "autoApn", "sim", sim_id, type ].join("-")
                    o = me.data(v);
                    if (!o) {
                        me.data(v, o = $("<span/>").addClass("autoApn hide"));
                    }
                    return o;
                })
                .on("redraw", function() {
                    var	me = $(this),
                        info = me.data("info"),
                        o;
    
                    $.each(info["order"] || [], (_, connId) => {
                        $.each(info[connId]["order"] || [], (_, id) => {
                            o = info[connId][id] || {};
                            if (!o["autoApn"]) {
                                return;
                            }
                            $.each([
                                "apn",
                                "username",
                                "password"
                            ], (_, t) => {
                                v = o[t] || "";
                                me.triggerHandler("get", [ id, t ]).text(v);
                            });
                        })
                    });
                })
                me.find(".autoApn").remove();
                me.data("auto_apn_feeder", o);
                o.triggerHandler("api_reload");
    
                // [Bug#30970] 5G SA Band / Channel / PCI (lock)
                me.triggerHandler("show_nr5g_band_channel_pci_panel", false);
                // [Bug#30061] LTE Channel / PCI (lock)
                me.triggerHandler("show_lte_channel_pci_panel", false);
    
                // [Bug#27221] Optimal Network Discovery UI
                //	should be reset along
                me.triggerHandler("show_ntw_panel", false);
    
                me.data({
                    network_mode: info["network_mode"],
                    conn_id: info["conn_id"],
                    sim_order: info["sim"]["_order"]
                });
                me.find("[name=external_antenna]")
                    .filter("[value=\"" + (info["external_antenna"] ? "yes" : "") + "\"]")
                        .prop("checked", true)
                    .end()
                .end();
                me.find("[name=use_antenna]")
                    .prop("checked", !!_e(info["useAntenna"]))
                .end();
    
                // [Bug#25957] We use "scheme", instead of "simCardScheme"
                obj = info["scheme"] || {};
    
                v = obj["type"];
                me
                .find("[name=sim_card_scheme]")
                .first().addBack("[value=\"" + v + "\"]")
                .last().prop("checked", true);
    
                v = obj["detail"] || {};
                o = me.find("[name=sim_card_enable]");
    
                o
                .not(
                    o.filter(function() {
                        var	me = $(this),
                            info = v[me.val()] || {};
    
                        me.parent()
                        .find("[name=sim_priority]")
                        .val(info["priority"] || "");
    
                        return !!info["enable"];
                    }).prop("checked", true)
                ).prop("checked", false)
    
                // RemoteSIM / SpeedFusion Connect are
                // supported, per connection, instead of Global
                // TODO: To be reviewed later
                me.find(".remote_sim")
                .toggleClass("hide", !supportRemoteSim)
                me.find(".fusion_sim")
                .toggleClass("hide", !supportFusionSim)
                me.find(".speedfusion_connect")
                .toggleClass("hide", !support_speedfusion_connect);
                // [Bug#27556] eSIM support
                me.find(".esim_1")
                .toggleClass("hide", !supportESim1)
                me.find(".esim_2")
                .toggleClass("hide", !supportESim2)
    
                me
                .find("[name=preferred_sim]")
                    .filter(":first, [value=\"" + info["preferred_sim"] + "\"]")
                        .last().prop("checked", true).end()
                    .end()
                .end()
                .find("[name=failback_idle_sleep]")
                    .prop("checked", checkIntFormat(idle_timeout, r))
                .end()
                .find("[name=idle_timeout]").val(
                    checkIntFormat(idle_timeout, r) ? idle_timeout : 3
                );
    
                r = { min: 1, max: 999 };
                v = parseInt(info["failback_timeout"] / 60, 10);
                is_enable = checkIntFormat(v, r);
                me
                .find("[name=failback_timeout_enable]")
                .prop("checked", is_enable);
                me
                .find("[name=failback_timeout]")
                .val(is_enable ? v : 10);
    
                if (supportRemoteSim) {
                    me.find("[name=simpool]").val(
                        info["remote_sim_pool"].join(" ")
                    )
                }
    
                // Alternate SIM Card Schedule
                $.each([ "hour", "day" ], function(_, s) {
                    var	o = me.find("[name=sim_schedule_" + s + "] option");
                    o = o.filter(":first,[value=\"" +
                        info["alternateSim"][s] + "\"]");
                    o.last().prop("selected", true);
                });
                $.each(info["sim"]["_order"], function(_, sim_id) {
                    var sim = info["sim"][sim_id];
                    var tds = me.find(".sim_settings .flex_row").find(".flex_td").filter(function() {
                        return $(this).data("sim_id") == sim_id
                    });
                    var	o, v;
    
                    o = tds.find("[name^=carrier_selection_auto]").closest(".flex_td");
    
                    // Carrier Selection
                    v = "yes";
                    switch (sim["carrier_selection"].length) {
                    case 0:
                        break;
                    case 1:
                        if (_e(sim["carrier_selection"][0]["mnc"])) {
                            v = "no";
                            break;
                        }
                        // No break;
                    default:
                        v = "plmn";
                        break;
                    }
                    o.find("[name^=carrier_selection_auto]")
                    .filter("[value=\"" + v + "\"]")
                    .prop("checked", true)
                    .end();
    
                    // Carrier Selection - Manual Select Info Display
                    o.data("info", v == "no" ? sim["carrier_selection"][0] : null);
    
                    // Carrier Selection - Custom PLMN Info Display
                    tds.find("[name^=carrier_selection_plmn]")
                    .val($.map(sim["carrier_selection"], function(o) {
                        return o["plmn"];
                    }).join("\n"));
    
                    // Carrier Selection - Extra Option Display
                    switch (v) {
                    case "yes":
                    default:
                        v = false;
                        break;
                    case "no":
                    case "plmn":
                        v = true;
                        break;
                    }
                    o
                    .find("label.carrier_selection_ui")
                    .toggleClass("hide", !v);
    
                    tds.find("[name^=data_bearer]")
                        .find(":first, [value=\"" + sim["data_bearer"] + "\"]")
                            .last().prop("selected", true)
    
                    // [Bug#30970] 5G SA Band / Channel / PCI (lock)
                    if ($.inArray("5G_SA_CHANNEL_PCI", cap) != -1) {
                        v = sim["nr5gBandChannelPciLock"] || {};
                        tds.find("[name^=nr5g_lock_band]").val(v["band"]);
                        tds.find("[name^=nr5g_lock_channel]").val(v["channel"]);
                        tds.find("[name^=nr5g_lock_pci]").val(v["pci"]);
                    }
                    // [Bug#30061] LTE Channel / PCI (lock)
                    if ($.inArray("LTE_CHANNEL_PCI", cap) != -1) {
                        v = sim["lteChannelPciLock"] || {};
                        tds.find("[name^=lte_lock_channel]").val(v["channel"]);
                        tds.find("[name^=lte_lock_pci]").val(v["pci"]);
                    }
    
                    tds
                    .find("[name^=opt_ntw_enable]")
                        .prop("checked", sim["opt_ntw_enable"])
                    .end()
                    .find("[name^=opt_ntw_interval]")
                        .find(":first, [value=\"" + sim["opt_ntw"]["interval"] + "\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end()
                    .find("[name^=opt_ntw_start]")
                        .find(":first, [value=\"" + sim["opt_ntw"]["period"][0] + "\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end()
                    .find("[name^=opt_ntw_end]")
                        .find(":first, [value=\"" + sim["opt_ntw"]["period"][1] + "\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end()
                    .find("[name^=band_selection_custom]")
                        .find(":first, [value=\"" + (_e(sim["band_list"]) ? "yes" : "no") + "\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end();
                    tds.find(".band_selection_panel").each(function() {
                        $(this).triggerHandler("reload", [
                            _e(sim["band_list"]) ?
                            sim["band_list"] : []
                        ]);
                    });
    
                    tds
                    .find("[name^=data_roaming_enable]")
                        .prop("checked", sim["roaming"]["enable"])
                    .end()
                    .find("[name^=data_roaming_mode]")
                        .find(":first, [value=\"" + sim["roaming"]["mode"] + "\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end()
                    .find("[name^=data_roaming_acl]").val(
                        sim["roaming"]["acl"].join(" ")
                    ).end()
                    .find("[name^=auth]")
                        .find(":first, [value=\"" + sim["auth"] + "\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end();
                    panel["operator"].triggerHandler("__set", [
                        $.extend({
                            sim_id: sim_id,
                            auto: !sim["operator_custom"]
                        }, sim["operator"]),
                        me.data("auto_apn_feeder")
                    ]);
                    panel["simpin"].triggerHandler("__set", [{
                        sim_id: sim_id,
                        sim_pin: sim["sim_pin"]
                    }]);
                    panel["bam"].triggerHandler("__set", [
                        $.extend({ sim_id: sim_id }, sim["bam"])
                    ]);
                });
            })
            .on("__set_carrier_selection.cellular_settings", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var sim_id = info["sim_id"];
                var td = me.find(".flex_row.CARRIER_SELECTION")
                .find(".flex_td").filter(function() {
                    return $(this).data("sim_id") == sim_id;
                });
                td.data("info", info)
                me.triggerHandler("redraw");
            })
            .on("get_band_list.cellular_settings", function(e, mode, type, data_bearer) {
                var	me = $(this),
                    band_info = me.data("band_info") || {},
                    list = null;
                $.each(band_info["cap"], function(_, o) {
                    if ((o["mode"] == mode || o["mode"] == "*") &&
                        (o["type"] == type || o["type"] == "*") &&
                        (o["freq"] == data_bearer || o["freq"] == "*") ) {
                        list = o["list"];
                        return false;
                    }
                });
                return list;
            })
            .on("get_channel_range.cellular_settings", function(e, _band) {
                var	band = _band || "",
                    me = $(this),
                    band_info = me.data("band_info") || {},
                    channel,
                    range = {};
                $.each(band_info["description"], function(_, o) {
                    if (o["value"] === band) {
                        channel = o["channel"] || {};
                        if (typeof channel["min"] === "number") {
                            range["min"] = channel["min"];
                        }
                        if (typeof channel["max"] === "number") {
                            range["max"] = channel["max"];
                        }
                        return false;
                    }
                })
                return range;
            })
            .on("redraw_band_selection.cellular_settings", function(e, _param) {
                // FIXME: Why it is always being called 2-3 times in a row?
                var me = $(this);
                var param = _param || {};
                var mode = me.data("module_model").toUpperCase();
                var type = param["network_mode"] || me.data("network_mode");
                var band_info = me.data("band_info");
                me.find("[name^=data_bearer]").each(function(i) {
                    var o = $(this);
                    var data_bearer = o.find("option:selected").val();
                    var sim_id = o.closest(".flex_td").data("sim_id");
                    var list = me.triggerHandler("get_band_list", [ mode, type, data_bearer ]);
    
                    me.find(".band_selection_panel").filter(function() {
                        return $(this).closest(".flex_td").data("sim_id") == sim_id;
                    }).each(function() {
                        $(this)
                        .data("filter", list)
                        .triggerHandler("check_action");
                    });
                })
            })
            .on("redraw_data_roaming.cellular_settings", function(e) {
                var me = $(this);
                var network_mode = me.data("network_mode");
                var cap = me.triggerHandler("get_cap", [ network_mode ]);
    
                me.find("[name^=data_roaming_enable]").each(function() {
                    var o = $(this);
                    var td = o.closest(".flex_td");
                    if ($.inArray("DATA_ROAMING_CONTROL_LIST", cap) != -1) {
                        td.find("[name=data_roaming_mode]").toggleClass("hide",
                            !o.is(":checked")
                        ).end()
                        .find("[name=data_roaming_acl]").toggleClass("hide",
                            !o.is(":checked") ||
                            !_e(td.find("[name=data_roaming_mode] option:selected").val())
                        ).end();
                    }
                });
            })
            .on("redraw.cellular_settings", function(e, _param) {
                var me = $(this);
                var param = _param || {};
                var	selected_multi_sim,
                    selected_schedule_sim,
                    selected_remote_sim;
                var no_preferred_sim = me.find("[name=preferred_sim]:checked").val() == "";
                var network_mode = me.data("network_mode");
                var cap = me.triggerHandler("get_cap", [ network_mode ]);
                var	o, v, n;
    
                me.find(".use_antenna_panel").toggleClass("hide",
                    !me.find("[name=use_antenna]").is(":checked")
                );
                // [Bug#25957] SIM Card - Custom Selection
                o = me.find("[name=sim_card_scheme]:checked");
                v = o.val();
                o = me.find(".sim_card_custom_selection")
                .toggleClass("hide", v !== "custom");
                switch (v) {
                case "custom":
                default:
                    v = o.children(":visible")
                    .map(function() {
                        var	me = $(this),
                            o = me.find("[name=sim_card_enable]"),
                            v = o.is(":checked");
    
                        me.find(".sim_priority")
                        .css("visibility", v ? "visible" : "hidden");
                        //.toggleClass("hide", !v);
    
                        return v ? o.val() : null;
                    });
    
                    if (v.length > 1) {
                        // NOTE: This is actually referring "multiple SIM cards"
                        selected_multi_sim = true;
                    } else {
                        // Priority always ceased to function without
                        // multiple selected SIMs
                        me.find(".sim_priority")
                        .css("visibility", "hidden");
                    }
                    if ($.inArray("remoteSim", v) != -1) {
                        selected_remote_sim = true;
                    }
                    break;
                case "alternate":
                    selected_schedule_sim = true;
                    break;
    
    // Legacy values, to be removed eventually...
                case "":	// Internal SIM / Both SIMs (default)
                    selected_multi_sim = (me.data("sim_count") > 1);
                    break;
                case "1":	// SIM A Only
                    break;
                case "2":	// SIM B Only
                    break;
                case "alternate":	// Alternative betwen SIM A and SIM B
                    selected_schedule_sim = true;
                    break;
                case "remote_sim":	// Use RemoteSIM Only
                    selected_remote_sim = true;
                    break;
                }
    
                // SIM Card - RemoteSIM
                me.find(".remote_sim_panel").toggleClass("hide", !selected_remote_sim);
    
                // Preferred SIM Card
                if ($.inArray("PREFERRED_SIM_CARD", cap) != -1) {
                    me.find(".preferred_sim_panel").toggleClass("hide",
                        !selected_multi_sim
                    );
                    // Failback to Preferred SIM when
                    me.find(".failback_panel").toggleClass("hide",
                        !selected_multi_sim || no_preferred_sim
                    );
                    if (param["allow_failback_idle_sleep"] !== undefined) {
                        me.find("[name=failback_idle_sleep]").prop("checked", param["allow_failback_idle_sleep"]);
                    }
                    me.find(".idle_timeout_panel").toggleClass("hide",
                        !me.find("[name=failback_idle_sleep]").is(":checked")
                    ).end()
                    .find("[name=failback_timeout]").prop("disabled",
                        !me.find("[name=failback_timeout_enable]").is(":checked")
                    );
                }
    
                // Alternating SIM
                me.find(".alternate_sim_panel").toggleClass("hide", !selected_schedule_sim);
    
                // Carrier Selection
                me.find("[name^=carrier_selection_auto]:checked").each(function() {
                    var o = $(this);
                    var td = o.closest(".flex_td");
                    var	info = td.data("info");
    
                    td.find(".manual_carrier_value")
                    .toggleClass("hide", !(info && _e(info["name"])))
                    .find("a").text(info ? info["name"] : "");
                });
                me.triggerHandler("carrier_selection_action");
    
                // [Bug#30970] 5G SA Band / Channel / PCI (lock)
                if (_e(me.find("[name^=nr5g_lock_band]")
                    .not((_, o) => $(o).val() === ""))) {
                    me.triggerHandler("show_nr5g_band_channel_pci_panel");
                }
                // [Bug#30061] LTE Channel / PCI (lock)
                if (_e(me.find("[name^=lte_lock_channel]")
                    .not((_, o) => $(o).val() === ""))) {
                    me.triggerHandler("show_lte_channel_pci_panel");
                }
    
                // Optimal Network Discovery
                me.find("[name^=opt_ntw_enable]").each(function() {
                    var o = $(this);
                    var td = o.closest(".flex_td");
                    td.find(".opt_ntw_enable_panel").toggleClass("hide",
                        !o.is(":checked")
                    );
                    if (o.is(":checked")) {
                        me.triggerHandler("show_ntw_panel");
                    }
                    // [Bug#21588] Display of "Always"
                    //	(without ending period selection)
                    o = td.find("[name^=opt_ntw_start]");
                    td.find(".opt_ntw_period_panel")
                    .toggleClass("hide",
                        !o.val().length);
                    // Hide away the period from option on
                    //	period to field
                    (function(opt, exclude) {
                        var	v = opt.val();
                        opt.children().each(function() {
                            var	me = $(this);
                            me.toggleOption(me.attr("value") !== exclude);
                        });
                        // If to value is gone, pick a value
                        //	one hour after from value
                        if (v !== opt.val()) {
                            opt.find("option")
                            .filter(":first,[value=\"" +
                                (+exclude + 1) + "\"]")
                            .last().prop("selected", true);
                        }
                    })(td.find("[name^=opt_ntw_end]"), o.val());
                });
                // Band Selection
                me.find("[name^=band_selection_custom]")
                .each(function() {
                    var	o = $(this),
                        td = o.closest(".flex_td");
    
                    td.find(".band_selection_panel")
                    .toggleClass("hide",
                        o.find("option:selected")
                        .val() == "no");
                });
                // Data Roaming
                me.triggerHandler("redraw_data_roaming");
                me.triggerHandler("redraw_band_selection");
                panel["operator"].triggerHandler("redraw");
                panel["bam"].triggerHandler("redraw");
            })
            .on("toggle_ui_cap.cellular_settings", function(e, _network_mode) {
                var me = $(this);
                var network_mode = _network_mode === undefined ?
                    me.data("network_mode") : _network_mode;
                var cap = me.triggerHandler("get_cap", [ network_mode ]);
                var support_engineering_settings = false;
                var selector = "";
                var o, v;
    
                support_engineering_settings =
                    $.inArray("SERVICE_ACTIVATION", cap) != -1 ||
                    $.inArray("ENGINEERING_SETTINGS", cap) != -1;
                selector = "." + cap.join(", .");
                me.find(".ui_cap").toggleClass("hide", true)
                    .filter(selector).toggleClass("hide", false);
                if ($.inArray("DATA_BEARER", cap) != -1) {
                    var supported_data_bearer = me.data("supported_data_bearer");
                    var list = supported_data_bearer[network_mode];
                    var	help_arr = [];
    
                    if (list === undefined) {
                        list = supported_data_bearer["default"];
                    }
                    /*me.find(".flex_row.DATA_BEARER .flex_th .title").text(
                        $.map(list, function(s) {
                            return _e(s) ? s : null;
                        }).join("/")
                    );*/
                    $.merge(list, [ "" ]);
                    me.find("[name=data_bearer]").children().toggleOption(true)
                    // Need to .find once more times to fetch the correct list of option
                    me.find("[name=data_bearer]").children().filter(function() {
                        return $.inArray($(this).val(), list) == -1
                    }).toggleOption(false);
    
                    // [Bug#30970] 5G SA Band / Channel / PCI Help text
                    if ($.inArray("5G_SA_CHANNEL_PCI", cap) != -1) {
                        help_arr.push(Help["cellular.dataBearer.nr5gBandChannelPci"]);
                    }
                    // [Bug#30061] LTE Channel / PCI Help text
                    if ($.inArray("LTE_CHANNEL_PCI", cap) != -1) {
                        help_arr.push(Help["cellular.dataBearer.lteChannelPci"]);
                    }
                    // Optimal Network Discovery Help text
                    if ($.inArray("OPTIMAL_NETWORK_DISCOVERY", cap) != -1) {
                        help_arr.push(Help["cellular.dataBearer.optNtw"]);
                    }
                    o = me.find("[name=data_bearer]")
                    .closest(".flex_row").find(".helpIcon");
                    o.toggleClass("hide", !_e(help_arr));
                    Help["cellular.dataBearer"] = help_arr.join("<br><br>\n");
                }
                // Enginerring Data help text
                Help["cellular.settings"] = Help["cellular.settings.pfx"];
                if (support_engineering_settings) {
                    Help["cellular.settings"] += Help["cellular.settings.engineeringSettings"]
                        .replace("{ENGINEERING_SETTINGS}",
                            window.support_max ? "data and " : "")
                }
                // Cellular reset module help text
                if ($.inArray("CELLULAR_RESET", cap) != -1) {
                    Help["cellular.settings"] += Help["cellular.settings.resetModule"];
                }
                // [Bug#28515] Use Antenna helptext
                if ($.inArray("USE_ANTENNA", cap) != -1) {
                    Help["cellular.settings"] += Help["cellular.settings.useAntenna"];
                }
                me.triggerHandler("redraw");
                me.data("network_mode", network_mode);
            })
            .on("toggle_engine_panel.cellular_settings", function(e, visible) {
                var me = $(this);
                var network_mode = me.data("network_mode");
                var cap = me.triggerHandler("get_cap", [ network_mode ]);
                var support_engineering_settings = false;
    
                support_engineering_settings =
                    $.inArray("SERVICE_ACTIVATION", cap) != -1 ||
                    $.inArray("ENGINEERING_SETTINGS", cap) != -1;
                me.find(".engineering_settings_panel").toggleClass("hide",
                    !visible || !support_engineering_settings);
            })
            .on("reset_cellular_module.cellular_settings", function() {
                var me = $(this);
                confirm_dialog("Confirm to reset the cellular module?", "Yes", "No").data("dfd")
                .done(function() {
                    var me = this;
                    $.ajax("api.cgi", {
                        cache: false,
                        type: "POST",
                        contentType: "application/json; charset=UTF-8",
                        data: JSON.stringify({
                            func: "cmd.cellularModule.reset",
                            connId: +me.data("conn_id")
                        }),
                        context: me
                    })
                    .then(api_cgi_filter)
                    .done(function() {
                        me.dialog("close");
                    })
                }.bind(me))
            })
            .on("show_use_antenna_panel", function() {
                $(this).find(".use_antenna_panel").removeClass("hide");
            })
            .on("simpool_callback.cellular_settings", function(e, simpool) {
                var	me = $(this);
                me.find("[name=simpool]").val(simpool.join("\n"));
            })
            .on("validate.cellular_settings", function() {
                var me = $(this);
                var network_mode = me.data("network_mode") || "default";
                var cap = me.triggerHandler("get_cap", [ network_mode ]);
                var o, r;
                var is_valid = true;
                var __err = function(feature, r, o) {
                    return err([
                        feature,
                        "must be between",
                        r["min"], "and", r["max"]
                    ].join(" "), o);
                };
    
                var	__check_simpool = function(s) {
                        var	valid = true,
                            range = {
                                min: 1,
                                max: 56
                            },
                            v;
    
                        $.each(s.split(" "), function(_, s) {
                            if (/^[0-9a-f-]{12,}(:\d\d?(,\d\d?)*)?$/i.test(s)) {
                                v = s.split(/:|,/);
                                v.shift();
                                $.each(v, function(_, v) {
                                    if (!checkIntFormat(v, range)) {
                                        valid = false;
                                        return false;
                                    }
                                });
                            } else {
                                valid = false;
                                return false;
                            }
                        });
                        return !!valid;
                    };
    
                // [Bug#17226] RemoteSIM Settings
                o = me.find("[name=simpool]");
                if (o.is(":visible")) {
                    v = o.val().replace(/[ \t\r\n]+/g, " ")
                    .replace(/^[ ]+|[ ]+$/g, "").toUpperCase();
                    if (isempty(v)) {
                        // [Bug#19384] Empty (No custom SIM poll) denotes
                        //	function Controlled by FusionSIM Cloud
                        // [Bug#29728] No more "Control by FusionSIM Cloud"
                        return err("RemoteSIM Pool cannot be empty", o);
                    } else if (!__check_simpool(v)) {
                        return err("Invalid RemoteSIM Pool: " + v, o);
                    }
                    o.val(v);
                }
                r = { min: 1, max: 99 };
                o = me.find("[name=idle_timeout]");
                if (me.find("[name=failback_idle_sleep]").is(":checked") &&
                    o.is(":visible")) {
                    o.val(trim(o.val()));
                    if (!checkIntFormat(o.val(), r)) {
                        // No error, just auto correct to default value, as in wifi case
                        o.val("3");
                    }
                }
    
                r = { min: 1, max: 999 };
                o = me.find("[name=failback_timeout]");
                if (me.find("[name=failback_timeout_enable]").is(":checked") &&
                    o.is(":visible")) {
                    o.val(trim(o.val()));
                    if (!checkIntFormat(o.val(), r)) {
                        // No error, just auto correct to default value, as in wifi case
                        o.val("10");
                    }
                }
    
                // [Bug#22376] Carrier Selection supports custom PLMN
                me.find("[name^=carrier_selection_auto]:checked:visible").each(function() {
                    var	o = $(this);
                    if (o.val() == "plmn") {
                        o = o.closest(".flex_td")
                            .find("[name=carrier_selection_plmn]");
                        o.val(trim(o.val()).replace(/[ ,\r\n\t]+/g, "\n"));     // Data cleaning
                        if (isempty(o.val())) {
                            is_valid = false;
                            return err("PLMN cannot be empty", o);
                        }
                        v = o.val().split("\n");
                        $.each(v, function(_, v) {
                            if (!/^\d{5,6}$/.test(v)) {
                                is_valid = false;
                                return err("Invalid PLMN (" + v + ")", o);
                            }
                        });
                    }
                });
                if (!is_valid) {
                    return false;
                }
    
                // [Bug#30970] 5G SA Band / Channel / PCI (lock)
                me.find("[name^=nr5g_lock_band]:visible")
                .each(function() {
                    var	band = $(this),
                        ref = band.closest(".channel_pci_panel"),
                        td = band.closest(".flex_td"),
                        channel = td.find("[name^=nr5g_lock_channel]"),
                        pci = td.find("[name^=nr5g_lock_pci]"),
                        ch_range = me.triggerHandler("get_channel_range", [ band.val() ]);
    
                    channel.val(trim(channel.val()));
                    pci.val(trim(pci.val()));
                    // is unlocked?
                    if (band.val() === "" && isempty(channel.val()) && (isempty(pci.val()))) {
                        return;
                    }
                    // Band
                    if (band.val() === "") {
                        is_valid = false;
                        return err("Band is required", band, ref);
                    }
                    // Channel
                    if (isempty(channel.val())) {
                        is_valid = false;
                        return err("Channel is required", channel, ref);
                    }
                    range = {
                        min: ch_range["min"] || 0,
                        max: ch_range["max"] || 3279165
                    };
                    if (!checkIntFormat(channel.val(), range)) {
                        is_valid = false;
                        return err("Channel must be between " +
                            range["min"] + " and " +
                            range["max"], channel, ref);
                    }
                    // PCI
                    if (isempty(pci.val())) {
                        is_valid = false;
                        return err("PCI is required", pci, ref);
                    }
                    range = { min: 0, max: 1007 };
                    if (!checkIntFormat(pci.val(), range)) {
                        is_valid = false;
                        return err("PCI must be between " +
                            range["min"] + " and  " +
                            range["max"], pci, ref);
                    }
                });
                // [Bug#30061] LTE Channel / PCI (lock)
                me.find("[name^=lte_lock_channel]:visible")
                .each(function() {
                    var	me = $(this),
                        ref = me.closest(".channel_pci_panel"),
                        o = me.closest(".flex_td")
                        .find("[name^=lte_lock_pci]"),
                        range;
     
                    me.val(trim(me.val()));
                    o.val(trim(o.val()));
                    if (isempty(me.val()) && (isempty(o.val()))) {
                        // Unlock
                        return;
                    }
                    if (isempty(me.val())) {
                        is_valid = false;
                        return err("Channel is required", me, ref);
                    }
                    range = { min: 0, max: 65535 };
                    if (!checkIntFormat(me.val(), range)) {
                        is_valid = false;
                        return err("Channel must be between " +
                            range["min"] + " and " +
                            range["max"], me, ref);
                    }
                    if (isempty(o.val())) {
                        is_valid = false;
                        return err("PCI is required", o, ref);
                    }
                    range = { min: 0, max: 503 };
                    if (!checkIntFormat(o.val(), range)) {
                        is_valid = false;
                        return err("PCI must be between " +
                            range["min"] + " and  " +
                            range["max"], o, ref);
                    }
                });
                if (!is_valid) {
                    return false;
                }
    
                me.find("[name^=band_selection_custom]:visible")
                .each(function() {
                    var	me = $(this);
    
                    if (me.find("option:selected").val() ==
                        "yes" &&
                        me.closest(".flex_td")
                        .find(".band_selection_panel")
                        .triggerHandler("export", [
                            false
                        ]) === false) {
                        is_valid = false;
                        return false;
                    }
                });
                if (!is_valid) {
                    return false;
                }
                me.find("[name^=data_roaming_enable]:visible").each(function() {
                    var o = $(this);
                    var td = o.closest(".flex_td");
                    var v = td.find("[name=data_roaming_mode] option:selected").val();
                    if (o.is(":checked") && _e(v)) {
                        o = td.find("[name=data_roaming_acl]");
                        v = o.val().replace(/[ ,\t\r\n]+/g, " ").replace(/^[ ]+|[ ]+$/g, "");
                        if (_e(v)) {
                            var str = $.map(v.split(" "), function(v) {
                                if (!checkIntFormat(v) || v.length != 3) {
                                        is_valid = false;
                                        return err("Invalid MCC (" +
                                                v + ") in List", o);
                                }
                                return v;
                            }).join(" ");
                            if (is_valid) {
                                o.val(str);
                            }
                        }
                    }
                    if (!is_valid) {
                        return false;
                    }
                });
    
                if (!is_valid) {
                    return false;
                }
                if (!panel["operator"].triggerHandler("validate") ||
                    !panel["simpin"].triggerHandler("validate") ||
                    !panel["bam"].triggerHandler("validate")) {
                    return false;
                }
                return is_valid;
            })
            .on("export.cellular_settings", function(e, silent_mode) {
                var me = $(this);
                var o, v, network_mode, cap;
                var res = {};
                var	err = silent_mode == undefined || silent_mode ?
                        () => false : window.err;
                var	tmp, is_error, ref_o;
    
                if (me.is(":visible")) {
                    network_mode = me.data("network_mode");
                    cap = me.triggerHandler("get_cap", [ network_mode ]);
                    o = me.find("[name=external_antenna]");
                    if (o.is(":visible")) {
                        res["useExternalAntenna"] = o.filter(":checked").val() == "yes";
                    }
                    o = me.find("[name=use_antenna]");
                    if (o.is(":visible")) {
                        res["useAntenna"] = o.is(":checked") ? o.val().split(" ") : null;
                    }
    
                    // [Bug#25957] New SIM Card selection method
                    v = null;
                    o = me.find("[name=sim_card_scheme]:visible:checked");
                    switch (o.val()) {
                    case "alternate":	// Alternate between SIM A and SIM B periodically
                        v = {
                            type: o.val()
                        };
                        break;
                    case "custom":		// Custom
                        tmp = {
                            order: []
                        };
                        v = {
                            type: o.val(),
                            detail: tmp
                        };
                        o = me.find("[name=sim_card_enable]:visible");
                        ref_o = o.closest(".sim_card_custom_selection");
                        if (!_e(o.filter(":checked"))) {
                            is_error = true;
                            return err("Invalid selection, SIM Card cannot be empty", o.first(), ref_o);
                        }
                        o.each(function() {
                            var	me = $(this),
                                id = me.val(),
                                o, v;
    
                            v = !!me.is(":checked");
                            tmp["order"].push(id);
                            // SIM - Enable
                            tmp[id] = {
                                "enable": v
                            };
                            // SIM - Priority
                            o = me.parent()
                            .find("[name=sim_priority]:visible");
                            if (_e(o)) {
                                o.val(trim(o.val()));
                                v = o.val();
                                if (!_e(v)) {
                                    v = o.attr("placeholder") || null;
                                }
                                if (!checkIntFormat(v, "1", "99")) {
                                    is_error = true;
                                    return err("Invalid priority, it must be number >= 1", o, ref_o);
                                }
                                tmp[id]["priority"] = +v;
                            }
                        });
                        break;
                    // Legacy value (do we still take care?)
    /*
                    case "":		// Both SIMs / Internal SIM
                        o = me.find("[name=preferred_sim]:checked");
                        if ($.inArray("PREFERRED_SIM_CARD", cap) != -1) {
                            res["preferredSim"] = o.is(":visible") ? +o.val() : null;
                        }
                    case "1":		// SIM A Only
                    case "2":		// SIM B Only
                    case "remote_sim":	// RemoteSIM Only
                        res["simCardScheme"] = o.val();
                        break;
    */
                    default:
                        // Unknown, so we don't set?!
                        break;
                    }
                    if (is_error) {
                        return false;
                    }
                    if (v) {
                        res["scheme"] = v;
                    }
    
                    // RemoteSIM sim pool
                    o = me.find("[name=simpool]");
                    if (o.is(":visible")) {
                        res["remoteSim"] = {
                            simPool: _e(o.val()) ? o.val().split(" ") : null
                        }
                    }
                    // Failback to Preferred SIM when - Idle Timeout
                    o = me.find("[name=idle_timeout]");
                    if (me.find("[name=failback_idle_sleep]:visible").is(":checked") &&
                        o.is(":visible")) {
                        res["idleTimeout"] = +o.val();
                    }
                    // Failback to Preferred SIM when - Non-preferred SIM is connected for
                    o = me.find("[name=failback_timeout_enable]");
                    if (o.is(":visible")) {
                        res["failbackTimeout"] = o.is(":checked") ?
                            +me.find("[name=failback_timeout]").val() : null;
                    }
    
                    // [Bug#20062] SIM Card Alternate Schedule
    //				if (res["simCardScheme"] == "alternate") {
                    if (res["scheme"] && res["scheme"]["type"] == "alternate") {
                        res["alternateSim"] = {
                            "day": +me.find("[name=sim_schedule_day] option:selected").val(),
                            "hour": +me.find("[name=sim_schedule_hour] option:selected").val()
                        }
                    }
    
                    // Per SIM Settings
                    res["sim"] = $.map(me.data("simNameMap"), function(o) {
                        var sim_id = o["value"];
                        var sim = { id: sim_id };
                        var o, v;
                        var tds = me.find(".flex_row").find(".flex_td").filter(function() {
                            return $(this).data("sim_id") == sim_id
                        });
    
                        // [Bug#22376] Carrier Selection supports custom PLMN
                        o = tds.find("[name^=carrier_selection_auto]:checked:visible");
                        switch (o.val()) {
                        case "yes":	// Auto
                            v = null;
                            break;
                        case "no":	// Manual Select
                            o = o.closest(".flex_td").data("info");
                            v = o === null ? [{ mcc: null }] : [ o ];
                            break;
                        case "plmn":	// Custom PLMN
                            o = tds.find("[name=carrier_selection_plmn]")
                            o.val(trim(o.val()).replace(/[ ,\r\n\t]+/g, "\n"));     // Data cleaning
                            v = $.map(o.val().split("\n"), function(v) {
                                return [ { plmn: v } ];
                            });
                            break;
                        }
                        sim["carrierSelection"] = v;
    
                        o = tds.find("[name^=data_bearer]");
                        if (o.is(":visible")) {
                            o = o.find("option:selected");
                            sim["mobileType"] = _e(o.val()) ? o.val() : null;
                        }
    
                        // [Bug#30970] 5G SA Band / Channel / PCI (lock)
                        o = tds.find("[name^=nr5g_lock_band]");
                        if (o.is(":visible")) {
                            if (isempty(o.val())) {
                                v = null;
                            } else {
                                v = {
                                    "band": o.val(),
                                    "channel": +tds.find("[name^=nr5g_lock_channel]").val(),
                                    "pci": +tds.find("[name^=nr5g_lock_pci]").val(),
                                };
                            }
                            sim["nr5gBandChannelPciLock"] = v;
                        }
                        // [Bug#30061] LTE Channel / PCI (lock)
                        o = tds.find("[name^=lte_lock_channel]");
                        if (o.is(":visible")) {
                            if (isempty(o.val())) {
                                v = null;
                            } else {
                                v = {
                                    channel: +o.val(),
                                    pci: +tds.find("[name^=lte_lock_pci]").val(),
                                };
                            }
                            sim["lteChannelPciLock"] = v;
                        }
    
                        o = tds.find("[name^=opt_ntw_enable]");
                        if (o.is(":visible")) {
                            v = tds.find("[name^=opt_ntw_start]").val();
                            v = v.length ? [
                                +v,
                                +tds.find("[name^=opt_ntw_end]").val()
                            ] : [];
                            sim["optimalNetwork"] = o.is(":checked") ? {
                                discovery: +tds.find("[name^=opt_ntw_interval]").val(),
                                period: v && v.length == 2 && v[0] != v[1] ? v : null
                            } : null;
                        }
                        o = tds.find("[name^=band_selection_custom]");
                        if (o.is(":visible")) {
                            sim["bandSelection"] =
                                o.find("option:selected")
                                .val() == "yes" ?
                                tds.find(".band_selection_panel")
                                .triggerHandler("export") :
                                null;
                        }
                        o = tds.find("[name^=data_roaming_enable]");
                        if (o.is(":visible")) {
                            sim["roaming"] = {
                                enable: o.is(":checked")
                            };
                            if (o.is(":checked")) {
                                o = tds.find("[name^=data_roaming_mode] option:selected");
                                v = tds.find("[name^=data_roaming_acl]").val();
                                sim["roaming"]["mode"] = _e(o.val()) && _e(v) ? o.val() : null;
                                sim["roaming"]["accessControlList"] = _e(o.val()) && _e(v) ?
                                    $.map(v.split(" "), function(v) {
                                        return +v;
                                    }) : null;
                            }
                        }
                        o = tds.find("[name^=auth]");
                        if (o.is(":visible")) {
                            v = o.find("option:selected").val();
                            sim["authentication"] = _e(v) ? v : null;
                        }
                        o = panel["operator"].triggerHandler("export", [ sim_id ]);
                        if (o !== undefined) {
                            sim["operator"] = o;
                        }
                        o = panel["simpin"].triggerHandler("export", [ sim_id ]);
                        if (o !== undefined) {
                            sim["simPin"] = o;
                        }
                        o = panel["bam"].triggerHandler("export", [ sim_id ]);
                        if (o !== undefined) {
                            sim["bandwidthAllowanceMonitor"] = o;
                        }
                        // res["sim"][sim_id] = sim;
                        return sim;
                    })
                }
                return $.isEmptyObject(res) ? undefined : res;
            })
            .on("carrier_selection_action", function(e) {
                // Carrier Selection Action
                var	me = $(this);
    
                me.find("[name^=carrier_selection_auto]:checked").each(function() {
                    var o = $(this);
                    var td = o.closest(".flex_td");
    
                    td.find(".custom_carrier_selection").toggleClass("hide",
                        o.filter(":checked").val() !== "plmn"
                    );
                });
            })
            .on("click", ".manual_carrier_action", function(e) {
                var me = $(e.delegateTarget);
                var td = $(this).closest(".flex_td");
                var info = {
                    conn_id: me.data("conn_id"),
                    sim_id: td.data("sim_id"),
                    selected_carrier: td.data("info") || {}
                }
                me
                .data("manual_carrier_selection_dialog")
                    .triggerHandler("open_dialog", [ info ]);
            })
            .on("change keyup", ".band_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw_band_selection");
            })
            .on("click", ".check_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw");
            })
            .on("change keyup", ".check_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw");
            })
            .on("click", ".check_carrier_selection_action", function(e) {
                $(e.delegateTarget).triggerHandler("carrier_selection_action");
            })
            .on("click", ".activate_action", function(e) {
                var me = $(e.delegateTarget);
                __create_gobi_activate_dialog(
                    me.data("conn_id"),
                    me.data("network_mode")
                );
            })
            .data("sim_schedule_cache", {})
            .on("mouseenter mouseleave", ".sim_schedule_preview_action", function(e) {
                var	me = $(e.delegateTarget),
                    active_div = e.type == "mouseenter" ? $("<div/>").append(create_loading_div()) : "",
                    cache, conn_id, day, hour, key, dfd;
    
                if (active_div) {
                    cache = me.data("sim_schedule_cache"),
                    conn_id = me.find("[name=conn_id]").val(),
                    day = me.find("[name=sim_schedule_day]").val(),
                    hour = me.find("[name=sim_schedule_hour]").val(),
                    key = [ conn_id, day, hour ].join("-");
                    dfd = cache[key] ? $.when(cache[key]) : $.ajax("api.cgi", {
                        data: {
                            func: "cmd.simSchedule",
                            connId: me.closest(".conn_dialog").data("conn_id"),
                            day: me.find("[name=sim_schedule_day]").val(),
                            hour: me.find("[name=sim_schedule_hour]").val()
                        },
                        context: [ cache, key ]
                    })
                    .then(function(json) {
                        var	card = jsonGetObject(json, { "response>": "simCard>" }),
                            res;
    
                        switch (card) {
                        case "A":
                        case "B":
                            res = this[0][this[1]] = $("<div/>").append(
                                $("<div/>").append("SIM " +
                                    card +
                                    " only: Now until upcoming switch schedule time"),
                                $("<div/>").append("SIM " +
                                    (card == "A" ? "B" : "A") +
                                    " only: Upcoming switch schedule time until the next month thereafter")
                            );
                            break;
                        default:
                            res = "No information available";
                            break;
    
                        }
                        return res;
                    });
    
                    dfd.done(function(v) {
                        active_div.empty().append(v);
                    });
                }
    
                $.tips(active_div ? {
                    follow_mouse: true,
                    msg: active_div
                } : false);
            })
            .on("click", ".engine_action", function(e) {
                var me = $(e.delegateTarget);
                __create_gobi_engine_dialog(
                    me.data("conn_id"),
                    me.data("module_model")
                );
            })
            .on("click", ".simpool_helper", function(e) {
                var	me = $(e.delegateTarget),
                    obj = me.find("[name=simpool]"),
                    pool_str = obj.val().replace(/[ \t\r\n]+/g, " ")
                        .replace(/^[ ]+|[ ]+$/g, "").toUpperCase(),
                    pool = _e(pool_str) ? pool_str.split(" ") : [];
                __create_remote_sim_discovery_dialog({
                    "simpool": pool,
                    "callback": me
                });
                return false;
            })
            .on("click", ".multi_col div.col_title", function(e) {
                $(e.delegateTarget).find("tbody.multi_col").attr("data-multiCol",
                    $(this).closest("div").attr("data-multiCol")
                );
            })
            return div;
        }
        // Wifi Specific settings
        // Wifi Authentication mapping
        var 	__wifi_auth_map = function(v) {
                var	ret,
                    has_wpa3 = true, // do the filtering in init function
                    map = $.merge(has_wpa3 ? [ {
                        "name": "WPA2/WPA3-Personal",
                        "value": "wpa23-psk",
                        "secure": true
                    }, {
                        "name": "WPA3-Personal",
                        "value": "wpa3-psk",
                        "secure": true
                    } ] : [], [ {
                        "name": "WPA/WPA2-Personal",
                        "value": "wpa-psk",
                        "secure": true
                    }, {
                        "name": "WPA/WPA2-Enterprise",
                        "value": "wpa",
                        "secure": true
                    }, {
                        "name": "802.1x with dynamic WEP key",
                        "value": "8021x",
                        "secure": true
                    }, {
                        "name": "Enhanced Open (OWE)",
                        "value": "owe"
                    }, {
                        "name": "WEP",
                        "value": "wep"
                    }, {
                        "name": "Open",
                        "value": "open"
                    } ]);
            if (v == undefined) {
            //	Whole Map
                ret = map;
            } else {
            //	Particular item of the map, search with v
                $.each(map, function(_, o) {
                    if (o["value"] == v || o["name"] == v) {
                        ret = o;
                        return false;
                    }
                });
                if (!ret) {
                    ret = map.slice(-1)[0];
                }
            }
            return ret;
        }
        // [Bug#21999] Wi-Fi Performance Monitor Dialog
        window.create_wifi_perf_schedule_table = function() {
            var	sche_table;
    
            var	weekdayMap = {
                    "": [ "---" ],
                    "everyday": [ "Every Day", "d" ],
                    "Monday": [ "Every Monday", "w" ],
                    "Tuesday": [ "Every Tuesday", "w" ],
                    "Wednesday": [ "Every Wednesday", "w" ],
                    "Thursday": [ "Every Thursday", "w" ],
                    "Friday": [ "Every Friday", "w" ],
                    "Saturday": [ "Every Saturday", "w" ],
                    "Sunday": [ "Every Sunday", "w" ],
                    "everyhour": [ "Every Hour", "h" ]
                };
    
            sche_table = create_grid_table({
                title_row: $("<tr/>").addClass("tabletitle").append(
                    $("<td/>").text("Test Schedule")
                ),
                data_row: $("<tr/>").addClass("tablecontent2").append(
                    $("<td/>").append(
                        $("<select/>", {
                            name: "_period"
                        }).append(create_option_array(
                            $.map(weekdayMap || {}, function(o, v) {
                                return [[ v, o[0] ]];
                            })
                        )).addClass("sche_action"),
                        $("<span/>").addClass("sche_hour sche_day hide").append(
                            ",",
                            $("<span/>").css({
                                display: "inline-block",
                                width: "60px",
                                "text-align": "right"
                            }).append(
                                $("<select/>", {
                                    name: "_hour"
                                })
                                .addClass("sche_day")
                                .append(
                                    create_option_array($.map(
                                        new Array(24),
                                        function(_, i) {
                                            var	v = i ? i : "",
                                                t = ("0" + i).slice(-2);
                                            return [[ v, t ]];
                                        }
                                    ))
                                ),
                                $("<span/>")
                                .addClass("sche_hour")
                                .text("xx")
                            ),
                            ":",
                            $("<select/>", {
                                name: "_minute"
                            }).append(
                                create_option_array([
                                    [ "", "00" ],
                                    [ 5, "05" ],
                                    10, 15, 20, 25, 30,
                                    35, 40, 45, 50, 55
                                ])
                            )
                        )
                    )
                ),
                row_action: function(row) {
                    $(this).closest(".grid_table")
                    .triggerHandler("check_row", [ this ]);
                }
            }).addClass("sep");
    
            sche_table.data({
                weekdayMap: weekdayMap
            });
    
            sche_table
            .on("check_row", function(e, row) {
                var	me = $(this),
                    weekdayMap = me.data("weekdayMap") || {},
                    o = row.find("[name=_period] option:checked");
                    obj = row.find(".sche_hour,.sche_day");
                switch ((weekdayMap[o.val()] || [])[1]) {
                case "w":	// Weekly
                case "d":	// Daily
                    obj = obj.not(obj.filter(".sche_day")
                    .toggleClass("hide", false));
                    break;
                case "h":	// Hourly
                    obj = obj.not(obj.filter(".sche_hour")
                    .toggleClass("hide", false));
                    break;
                default:
                    break;
                }
                obj.toggleClass("hide", true);
            })
            .on("export", function(e) {
                return $(this).triggerHandler("matrix_export", {
                    type: "json"
                });
            })
            .on("change keyup", ".sche_action", function(e) {
                var	me = $(e.delegateTarget),
                    row = $(this).closest(".matrix_row");
                me.triggerHandler("check_row", [ row ]);
            });
    
            return sche_table;
        };
    
        window.create_wifi_perf_event_table = function() {
            var	neotable = $("<table/>")
                .addClass("form_table sep neotable"),
                table = $("<div/>")
                .data("neotable", neotable)
                .append(neotable);
    
            neotable.data({
                "row_tmpl": $("<tr/>").append(
                    $("<td/>"),
                    $("<td/>").css({
                        width: "50px"
                    }).append($("<button/>", {
                        type: "button"
                    }).addClass("icon fas trashIcon remove_action"))
                ).addClass("tablecontent2 row"),
                "add_tmpl": $("<tr/>").append(
                    $("<td/>").append(
                        $("<select/>", {
                            name: "_event"
                        }).append(
                            create_option_array([
                                [ "", "---" ],
                                [ "speedtest", "Speed Test" ]
                            ])
                        ).addClass("evt_action"),
                        $("<span/>").addClass("evt_speedtest hide").append(
                            ", Server: ",
                            $("<select/>", {
                                name: "_country"
                            }).append(
                                create_option_array([
                                    [ "", "(Auto)" ],
                                ])
                            ).addClass("evt_action"),
                            $("<select/>", {
                                name: "_server"
                            }).append(
                                create_option_array([
                                    [ "", "(Auto Select Server)" ],
                                ])
                            ).addClass("evt_country")
                        )
                    ),
                    $("<td/>").css({
                        width: "50px"
                    }).append($("<button/>", {
                        type: "button"
                    }).addClass("icon fas addIcon add_action"))
                ).addClass("tablecontent2")
            });
    
            neotable.append(
                $("<thead/>").append(
                    $("<tr/>").addClass("tabletitle").append($("<td/>", {
                        colspan: "2"
                    }).text("Test Case"))
                ),
                $("<tbody/>"),
                $("<tfoot/>").append(neotable.data("add_tmpl").clone())
            );
    
            neotable
            .on("__reset", function(e) {
                var	me = $(this),
                    o;
    
                me.find("tbody").empty();
    
                me.triggerHandler("reset_input");
            })
            .on("add_rows", function(e, arr) {
                var	me = $(this),
                    testMap = {
                        "speedtest": "Speed Test"
                    },
                    row_tmpl = me.data("row_tmpl"),
                    rows;
    
                rows = $.map(arr || [], function(info) {
                    var	arr = [ "[" + testMap[info["type"]] + "]" || "Unknown" ];
    
                    switch (info["type"]) {
                    case "speedtest":
                        if (_e(info["country"])) {
                            if (_e(info["server"])) {
                                arr.push("Server:", info["country"], info["server"]);
                            } else {
                                arr.push("Country:", info["country"]);
                            }
                        } else {
                            arr.push("Server:", "(Auto)");
                        }
                    }
    
                    return row_tmpl.clone()
                    .data("info", info)
                    .find("td:first").text(arr.join(" ")).end();
                });
    
                me.find("tbody").append(rows);
            })
            .on("check_input", function(e) {
                var	me = $(this),
                    list = me.data("speedtestServerList"),
                    obj = me.find(".evt_speedtest,.evt_country"),
                    o, v;
    
                o = me.find("[name=_event] option:selected");
                switch (o.val()) {
                case "speedtest":
                    obj = obj.not(obj.filter(".evt_speedtest")
                    .toggleClass("hide", false));
                    v = me.find("[name=_country] option:selected").val();
                    if (_e(v)) {
                        obj = obj.not(obj.filter(".evt_country")
                        .toggleClass("hide", false));
                        me.find("[name=_server]").empty()
                        .append(create_option_array($.merge(
                            [[ "", "(Auto Select Server)" ]],
                            list[v]
                        )));
                    }
                    break;
                default:
                    break;
                }
                obj.toggleClass("hide", true);
            })
            .on("reset_input", function(e) {
                var	me = $(this);
                $.each([
                    "_event",
                    "_country",
                    "_server"
                ], function(_, s) {
                    me.find("[name=\"" + s + "\"] option:first")
                    .prop("selected", true);
                });
                me.triggerHandler("check_input");
            })
            .on("fetch_input", function(e) {
                var	me = $(this),
                    info, o;
    
                o = me.find("[name=_event] option:selected");
                switch (o.val()) {
                case "speedtest":
                    info = {
                        "type": o.val()
                    };
    
                    o = me.find("[name=_country] option:selected");
                    if (!_e(o.val())) {
                        break;
                    }
                    info["country"] = o.val();
    
                    o = me.find("[name=_server] option:selected");
                    if (!_e(o.val())) {
                        break;
                    }
                    info["server"] = o.val();
                    break;
                default:
                    break;
                }
                return info;
            })
            .on("change keyup", ".evt_action", function(e) {
                var	me = $(e.delegateTarget);
                me.triggerHandler("check_input");
            })
            .on("click", ".remove_action", function(e) {
                var	row = $(this).closest("tr");
                row.remove();
            })
            .on("click", ".add_action", function(e) {
                var	me = $(e.delegateTarget),
                    row = $(this).closest("tr"),
                    info;
    
                info = me.triggerHandler("fetch_input");
                if (info) {
                    me.triggerHandler("add_rows", [[ info ]]);
                    me.triggerHandler("reset_input");
                }
            });
    
            table
            .on("init", function() {
                $.ajax("api.cgi", {
                    cache: false,
                    data: {
                        func: "info.wifiPerformanceTest"
                    },
                    context: this
                })
                .done(function(json) {
                    var	info = jsonGetObject(json, { "response>": {
                            "speedtestServerList>.o": {
                                ">.a": ">"
                            }
                        }});
                    $(this).data("speedtestServerList", info);
                    $(this).data("neotable").data("speedtestServerList", info);
                })
                .done(function() {
                    var	me = $(this),
                        list = me.data("speedtestServerList") || {};
    
                    me.find("[name=_country]").empty().append(
                        create_option_array($.merge(
                            [[ "", "(Auto)" ]],
                            list["order"] || []
                        ))
                    );
                })
            })
            .on("__reset", function(e) {
                var	me = $(this),
                    table = me.find(".neotable");
    
                table.triggerHandler("__reset");
            })
            .on("__set", function(e, info) {
                var	me = $(this),
                    table = me.find(".neotable");
    
                table.triggerHandler("__reset");
                table.triggerHandler("add_rows", [ info ]);
            })
            .on("export", function(e) {
                var	me = $(this),
                    table = me.find(".neotable"),
                    ret, info;
    
                // Export info from table
                ret = table.find("tbody tr").map(function() {
                    return $(this).data("info") || null;
                }).get();
    
                // Export info from selection row, if any
                info = table.triggerHandler("fetch_input");
                if (info) {
                    ret.push(info);
                }
    
                return ret;
            });
    
    // This table cannot be ready until the server data is loaded
    // FIXME: This implementation is not sustainable, we need to fix and improve it!
            table.triggerHandler("init");
    
            return table;
        };
    
        window.create_wifi_perf_dialog = function(_param) {
            var	dialog = $("<div/>"),
                param = _param || {},
                panel = {
                    wifi_table: __create_wifi_connection_table().addClass("sep"),
                    sche_table: create_wifi_perf_schedule_table(),
                    action_table: create_wifi_perf_event_table()
                }, o;
    
            panel["conn_method"] = panel["wifi_table"].data("conn_method_panel");
    
            // Hack the Wi-Fi table for your need
            // FIXME: Can we avoid the hack?
            o = panel["wifi_table"].find("[name=preferred_bssid]");
            o.closest("tr").find(".form_field").text("BSSID");
    
    
            dialog.data({
                "panel": panel,
                "callback": param["callback"]
            })
            .addClass("wifi_perf_dialog")
            .dialog($.extend(std_dialog_param(), {
                close: function() {
                    nd(); err();
                    // As the ".data" object will be removed,
                    // the option_hide can never be retrieve again
                    $(this).find("select").children().toggleOption(true);
                },
                buttons: [{
                    text: "Save",
                    click: function() {
                        var	me = $(this),
                            cb = me.data("callback"),
                            data;
                        if (cb && me.triggerHandler("validate")) {
                            data = me.triggerHandler("export");
                            data["action"] = data["id"] ? "update" : "add";
                            cb.triggerHandler("api_reload", [ data ])
                            .done(function() {
                                init_smart_status(window.SAVED_MSG, { focus: true });
                                $(this).dialog("close");
                            }.bind(this));
                        }
                    }
                }, {
                    text: "Cancel",
                    click: function() {
                        $(this).dialog("close");
                    }
                }]
            }))
    
            // Performance Test Info
            dialog.append(
                $("<table/>").addClass("form_table sep").append(
                    create_form_title("Performance Test"),
                    create_form_row("Wi-Fi Frequency", $("<select/>", {
                        name: "frequency"
                    }).append(
                        create_option_array([
                            [ "2400", "2.4GHz" ],
                            [ "5000", "5GHz" ]
                        ])
                    ))
                ),
                panel["wifi_table"],
                panel["sche_table"],
                panel["action_table"]
            );
    
            panel["conn_method"].triggerHandler("reposition", [ panel["conn_method"] ]);
    
            dialog
            .on("init.wifi_perf_dialog", function(e, _ref) {
                var	me = $(this),
                    wifi_table = me.data("panel")["wifi_table"];
                wifi_table.triggerHandler("init", [ _ref ]);
            })
            .on("__reset.wifi_perf_dialog", function() {
                var	me = $(this),
                    panel = me.data("panel");
    
                me.removeData("info");
                me.find("[name=freuqncy] option:first").prop("selected", true);
                panel["wifi_table"].triggerHandler("__reset");
                panel["sche_table"].triggerHandler("matrix_reset");
                panel["action_table"].triggerHandler("__reset");
            })
            .on("__set.wifi_perf_dialog", function(e, _info) {
                var	me = $(this),
                    info = _info || {},
                    wifi_table = me.data("panel")["wifi_table"],
                    sche_table = me.data("panel")["sche_table"],
                    panel = me.data("panel"),
                    arr;
    
                me.data("info", info)
    
                me.find("[name=frequency] option")
                .filter(":first, [value=\"" + info["frequency"] + "\"]")
                .last().prop("selected", true);
    
    
                wifi_table.triggerHandler("__set", [ $.extend({}, _info, { preferredBssid: info["bssid"] }) ]);
    
                arr = $.map(info["schedule"] || [], function(o) {
                    return {
                        period: _e(o["type"]) ? o["type"] : "",
                        hour: o["detail"]["hour"] || 0,
                        minute: o["detail"]["minute"] || 0
                    };
                });
                sche_table.triggerHandler("matrix_set", [ arr ]);
    
                panel["action_table"].triggerHandler("__set", [ info["test"] ]);
            })
            .on("redraw.wifi_perf_dialog", function(e) {
                var	me = $(this),
                    wifi_table = me.data("panel")["wifi_table"];
                wifi_table.triggerHandler("redraw");
            })
            .on("open_dialog.wifi_perf_dialog", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var def_info = {
                    port: { type: "wifi" },
                    conn: { method: "dhcp" }
                };
                var is_edit = !$.isEmptyObject(info);
                me.triggerHandler("__reset");
                if (is_edit) {
                    me.triggerHandler("__set", [ info ]);
                } else {
                    // TODO: This is ad-hoc calibration when add new.
                    // If this object is well defined, we don't need this
                    // special call at all.
                    panel["conn_method"].triggerHandler("__set", [
                        def_info
                    ])
                }
                me.data("is_edit", is_edit);
                me.triggerHandler("redraw");
                me.dialog("option", "title",
                    ( is_edit ? "Edit" : "Create" ) +
                    " Wi-Fi Connection Profile");
                me.dialog("open");
            })
            .on("validate.wifi_perf_dialog", function(e) {
                var	me = $(this),
                    panel = me.data("panel");
    
                return panel["wifi_table"].triggerHandler("validate");
            })
            .on("export.wifi_perf_dialog", function(e) {
                var	me = $(this),
                    panel = me.data("panel") || {},
                    info = me.data("info") || {},
                    id = info["id"],
                    data = {},
                    o;
    
                // Profile ID
                if (id) {
                    data["id"] = id;
                }
    
                // Performance Test
                v = me.find("[name=frequency] option:selected").val();
                if (_e(v) && +v) {
                    data["frequency"] = +v;
                }
    
                // Wi-Fi Connection
                o = panel["wifi_table"].triggerHandler("export");
                // FIXME: Hack work...
                o["bssid"] = o["preferredBssid"];
                delete o["preferredBssid"];
                $.extend(data, o);
    
                // Test Schedule
                o = panel["sche_table"].triggerHandler("export");
                if (o !== false) {
                    data["schedule"] = $.map(o["record"], function(o) {
                        if (!_e(o["period"])) {
                            return null;
                        }
                        var	ret = {
                                type: o["period"],
                                detail: {
                                    minute: +o["minute"]
                                }
                            },
                            weekdayMap = panel["sche_table"]
                            .data("weekdayMap");
                        switch ((weekdayMap[o["period"]] || [])[1]) {
                        case "w":
                        case "d":
                            ret["detail"]["hour"] = +o["hour"];
                            break;
                        case "h":
                        default:
                            break;
                        }
                        return ret;
                    });
                }
    
                // Test Case
                o = panel["action_table"].triggerHandler("export");
                if (o !== false) {
                    data["test"] = $.map(o || [], function(o) {
                        var	ret = null;
                        switch (o["type"]) {
                        case "speedtest":
                            ret = {
                                type: o["type"],
                                detail: {}
                            };
                            if (_e(o["country"])) {
                                ret["detail"]["country"] = o["country"];
                                if (_e(o["server"])) {
                                    ret["detail"]["server"] = o["server"];
                                }
                            }
                            break;
                        default:
                            break;
                        }
                        return ret;
                    })
                }
    
                return data;
            });
    
            return dialog;
        };
        var	__create_wifi_connection_table = function(_param) {
                var	param = _param || {},
                    table = $("<table/>").addClass("form_table");
    
                if (!param["save_and_connect"]) {
                    // [Bug#29179] Routing Mode supression patch
                    table.data("conn_method_panel", create_conn_method({
                        routingMode: false
                    }));
                }
                table.append(
                    $("<thead/>").append(
                        create_form_title("Wi-Fi Connection")
                    ),
                    $("<tbody/>").append(
                        create_form_row("Type", create_radio_input("wifi_profile_auto", [{
                            text: "Automatic",
                            value: "yes"
                        }, {
                            text: "On Demand",
                            value: "no"
                        }])).addClass("hide edit_mode"),
                        create_form_row("Network Name (SSID)", [
                            $("<input/>", { name: "ssid", maxlength: "50" })
                                .addClass("add_mode")
                                .attr("size", "40"),
                            $("<span/>").addClass("hide ssid edit_mode")
                        ]),
                        create_form_row("Security", [
                            $("<select/>", { "name": "auth" }).addClass("check_action add_mode").append(
                                create_option_array($.map(__wifi_auth_map(), function(o) {
                                    var	t = o["name"],
                                        v = o["value"] || i;
                                    return [[ v, t ]];
                                }))
                            ),
                            $("<span/>").addClass("hide security edit_mode")
                        ]),
                        create_form_row("Encryption Key", $("<input/>", {
                            type: "password",
                            name: "wep_key",
                            maxlength: "64"
                        }).attr("size", "40")
                        .passphrase())
                        .addClass("hide wep"),
                        create_form_row("Shared Key", $("<input/>", {
                            type: "password",
                            name: "wpa_key",
                            maxlength: "64"
                        }).attr("size", "40")
                        .passphrase())
                        .addClass("hide wpa-psk wpa23-psk wpa3-psk")
                    ),
                    $("<tbody/>").addClass("wpa 8021x").append(
                        create_form_row("EAP Method",
                            $("<select/>", { name: "eap_method" })
                            .addClass("check_action").append(
                                create_option_array([
                                    [ "PEAP", "PEAP" ],
                                    [ "TTLS", "TTLS" ],
                                    [ "TLS", "TLS" ]
                                ])
                            )
                        ),
                        create_form_row("EAP Phase 2 Method",
                            $("<select/>", { name: "eap_method_2" })
                            .addClass("check_action").append(
                                create_option_array([
                                    [ "EAP/CHAP", "EAP/CHAP" ],
                                    [ "EAP/MSCHAP", "EAP/MSCHAP" ],
                                    [ "EAP/MSCHAPV2", "EAP/MSCHAPV2" ],
                                    [ "EAP/PAP", "EAP/PAP" ]
                                ])
                            )
                        ).addClass("hide TTLS PEAP"),
                        create_form_row("Login ID", $("<input/>", {
                                name: "wpa_login",
                                maxlength: "127"
                            }).attr("size", "40")
                        ).addClass("hide TTLS PEAP"),
                        create_form_row("Password", $("<input/>", {
                                type: "password",
                                name: "wpa_password",
                                maxlength: "127"
                            }).attr("size", "40")
                        ).addClass("hide TTLS PEAP"),
                        create_form_row("Confirm Password", $("<input/>", {
                                type: "password",
                                name: "wpa_password_confirm",
                                maxlength: "127"
                            }).attr("size", "40")
                        ).addClass("hide TTLS PEAP"),
                        create_form_row("EAP outer authentication identity", $.merge(
                            create_radio_input("eap_auth", [{
                                "text": "Anonymous",
                                "value": "anonymous"
                            }, {
                                "text": "User Credentials",
                                "value": "credentials",
                                "itemClassName": "TTLS PEAP"
                            }, {
                                "text": "Other: ",
                                "value": "other",
                                "block": false
                            }], {
                                "defaultValue": "anonymous",
                                "block": true,
                                "className": "check_action"
                            }), [
                                $("<input/>", {
                                    "name":"eap_auth_other",
                                    "maxlength":"30"
                                }).addClass("other")
                            ]
                        )),
                        create_form_row("CA Certificate", [
                            $("<select/>", { name: "cert_ca" })
                                .css({ "min-width": "150px" }),
                            $("<div/>").addClass("warn greyText hide").append(
                                "No Certificate is found, please upload through Certificate Manager"
                            )
                        ]).addClass("hide TLS"),
                        create_form_row("Client Certificate", [
                            $("<select/>", { name: "cert_client" })
                                .css({ "min-width": "150px" }),
                            $("<div/>").addClass("warn greyText hide").append(
                                "No Certificate is found, please upload through Certificate Manager"
                            )
                        ]).addClass("hide TLS")
                    ),
                    $("<tbody/>").append(
                        create_form_row("Preferred BSSID", [
                            $("<input/>", {
                                "type": "checkbox",
                                "name": "has_preferred_bssid",
                                "value": "yes"
                            }).addClass("check_action"), " ",
                            create_mac_input({
                                "name": "preferred_bssid"
                            })
                        ])
                    ),
                    table.data("conn_method_panel") || ""
                );
    
                table
                .on("init.wifi_connection_table", function(e, _ref) {
                    var	me = $(this),
                        ref = _ref || {};
    
                    me.data("support_auth_8021x", ref["support_auth_8021x"]);
                    $.ajax("api.cgi", {
                        cache: false,
                        data: {
                            func: "cmd.cert.list",
                            type: "wwan_client wwan_ca"
                        },
                        context: me
                    }).done(function(json) {
                        var	me = $(this),
                            info = jsonGetObject(json, { "response>": {
                                "wwan_ca>ca.o": "summary>",
                                "wwan_client>client.o": "summary>"
                            }});
                        $.each([ "ca", "client" ], function(_, t) {
                            var	opt = info[t] || {},
                                arr = $.map(opt, function(t, v) {
                                    return v == "_order" ? null : [[ v, t ]];
                                }).sort(function(a, b) {
                                    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
                                }),
                                def_opt_text = t == "client" ? "" : "-- Not in use --";
                            me
                            .find("select[name=" + [ "cert", t ].join("_") + "]")
                            .empty().append(create_option_array($.merge(
                                [[ "", def_opt_text ]],
                                arr
                            )))
                            .siblings(".warn").toggleClass("hide", !!arr.length);
                        });
                    })
                    me.find("[name=auth] [value=8021x]")
                        .toggleOption(!!ref["support_auth_8021x"]);
                })
                .on("__reset.wifi_connection_table", function() {
                    var	me = $(this);
    
                    me.removeData("info");
                    me.find("select")
                    .find("option:first").prop("selected", true).end()
                    .end()
                    .find("input:text").val("").end()
                    me.find("[name=wifi_profile_auto]")
                    .filter("[value=yes]").prop("checked", true).end()
                    .end()
                    .find("[name=wep_key]").val("").end()
                    .find("[name=wpa_key]").val("").end()
                    .find("[name=eap_auth]")
                    .filter("[value=anonymous]").prop("checked", true).end()
                    .end()
                    .find("[name=wpa_password]").val("").end()
                    .find("[name=wpa_password_confirm]").val("").end()
                    .find("[name=has_preferred_bssid]").prop("checked", false).end()
                    .find("[name=preferred_bssid]").val("").end()
    
                    if (!!(o = me.data("conn_method_panel"))) {
                        o.triggerHandler("__reset");
                    }
                })
                .on("__set.wifi_connection_table", function(e, _info) {
                    var	me = $(this),
                        info = _info || {},
                        o, v, obj;
    
                    me
                    .data("info", info)
                    .find("[name=wifi_profile_auto]")
                    .filter("[value=\"" +
                        (info["enable"] ? "yes" : "no") +
                        "\"]").prop("checked", true);
    
                    me
                    .find("[name=ssid]").val(info["ssid"]).end()
                    .find(".ssid").text(info["ssid"]).end()
                    .find("[name=has_preferred_bssid]").prop("checked", _e(info["preferredBssid"])).end()
                    .find("[name=preferred_bssid]").val(info["preferredBssid"]).end();
    
                    o = info["security"] || {};
                    o = o["policy"] || {};
                    v = __wifi_auth_map(o["type"]);
    
                    me
                    .find(".security").text(v["name"]).end()
                    .find("[name=auth]").children()
                    .first().addBack("[value=\"" + v["value"] + "\"]")
                    .last().prop("selected", true);
    
                    obj = o["detail"] || {};
                    switch (v["value"]) {
                    case "wep":
                        me.find("[name=wep_key]").val(obj["key"]);
                        break;
                    case "wpa3-psk":
                    case "wpa23-psk":
                    case "wpa-psk":
                        me.find("[name=wpa_key]").val(obj["key"]);
                        break;
                    case "wpa":
                    case "8021x":
                        me.find("[name=eap_method]")
                        .find(":first, [value=\"" + obj["method"] + "\"]")
                            .last().prop("selected", true).end()
                        .end()
                        .end();
                        // NOTE: Fixed display
                        v = obj["outerAuthenticationId"];
                        o = me.find("[name=eap_auth]");
                        (_e(v) ? o.filter(":last, [value=\"" + v + "\"]") : o.filter(":first"))
                        .first().prop("checked", true);
                        me.find("[name=eap_auth_other]").val(o.filter(":checked").val() == "other" ? v : "");
                        switch (obj["method"]) {
                        case "PEAP":
                        case "TTLS":
                        default:
                            me.find("[name=eap_method_2]")
                            .find(":first, [value=\"" + obj["phase2Method"] + "\"]")
                                .last().prop("selected", true).end()
                            .end()
                            .end()
                            .find("[name=wpa_login]").val(obj["username"]).end()
                            .find("[name=wpa_password]").val(obj["password"]).end()
                            .find("[name=wpa_password_confirm]").val(obj["password"]).end();
                            break;
                        case "TLS":
                            v = obj["certificate"] || {};
                            me
                            .find("[name=cert_ca]")
                            .find(":first, [value=\"" + v["ca"] + "\"]")
                                .last().prop("selected", true).end()
                            .end()
                            .end()
                            .find("[name=cert_client]")
                            .find(":first, [value=\"" + v["client"] + "\"]")
                                .last().prop("selected", true).end()
                            .end()
                            .end()
                            break;
                        }
                        break;
                    }
    
                    if (!!(o = me.data("conn_method_panel"))) {
                        o.triggerHandler("__set", [ _info ]);
                    }
                })
                .on("redraw.wifi_connection_table", function(e) {
                    var	me = $(this),
                        o,
                        v = me.find("[name=auth] option:selected").val(),
                        is_edit = me.data("is_edit");
    
                    me.find(".open, .wep, .wpa-psk, .wpa23-psk, .wpa3-psk, .wpa, .8021x")
                    .toggleClass("hide", true)
                    .filter(function() {
                        return $(this).hasClass(v);
                    }).toggleClass("hide", false)
                    v = me.find("[name=eap_method] option:selected").val();
                    me.find(".PEAP, .TTLS, .TLS")
                    .toggleClass("hide", true)
                    .filter(function() {
                        return $(this).hasClass(v);
                    }).toggleClass("hide", false)
                    me.find("[name=preferred_bssid]").toggleClass("hide",
                        !me.find("[name=has_preferred_bssid]").is(":checked")
                    );
    
                    if (!!(o = me.data("conn_method_panel"))) {
                        o.triggerHandler("redraw");
                    }
                })
                .on("export.wifi_connection_table", function(e, silent_mode) {
                    var	err = silent_mode === undefined || silent_mode ?
                            function() { return false; } : window.err,
                        me = $(this),
                        o, v, r, tmp;
                        data = {};
    
                    // Port-Type (auto-generated)
                    data["port"] = {
                        type: "wifi"
                    };
    
                    // Enable
                    o = me.find("[name=wifi_profile_auto]:checked");
                    data["enable"] = o.val() === "yes";
    
                    // SSID
                    o = me.find("[name=ssid]");
                    // Someone may want to connect to a SSID with only a space character, trim(o.val()) is not needed
                    if (isempty(o.val())) {
                        return err("Network Name (SSID) must not be empty.", o);
                    }
                    data["ssid"] = o.val();
    
                    // Security Policy
                    o = me.find("[name=auth] option:selected");
                    v = o.val();
                    data["security"] = {
                        "policy": {
                            "type": __wifi_auth_map(v)["name"],
                        }
                    };
    
                    // Security Policy - Details
                    tmp = null;
                    switch (v) {
                    case "wpa3-psk":
                    case "wpa23-psk":
                    case "wpa-psk":
                        // [Bug#18208] Revised WPA Shared Key validation
                        o = me.find("[name=wpa_key]");
                        r = { min: "8", max: "63" };
                        // Check if its 8 - 63 characters, or
                        // exactly 64 hex characters
                        if (!checkIntFormat(o.val().length, r) &&
                            !(o.val().length == 64 &&
                            checkHexFormat(o.val()))) {
                            return err("WPA Shared Key must be " +
                                "between " + r["min"] +
                                " and " + r["max"] + " " +
                                "characters or exactly 64 " +
                                "hex characters whereas " +
                                "you entered " +
                                o.val().length +
                                " characters.", o);
                        }
                        v = o.val();
                        if (!checkWPAKeyFormat(v)) {
                            return err("WPA Shared Key must not contain the characters \" and `", o);
                        }
                        tmp = {
                            key: o.val()
                        };
                        break;
                    case "wpa":
                    case "8021x":
                        // EAP Method
                        o = me.find("[name=eap_method] option:selected");
                        tmp = {
                            method: o.val()
                        };
                        switch (tmp["method"]) {
                        case "PEAP":
                        case "TTLS":
                        default:
                            // Login ID
                            o = me.find("[name=wpa_login]");
                            v = trim(o.val());
                            if (isempty(v)) {
                                return err("Login ID must not be empty.", o);
                            }
                            if (!checkSafeFormat(v)) {
                                return err("WPA login must not contain the characters \", $, and `", o);
                            }
                            tmp["username"] = v;
    
                            // Password
                            o = me.find("[name=wpa_password]");
                            v = o.val();
                            if (isempty(v)) {
                                return err("Password must not be empty.", o);
                            }
                            if (v != me.find("[name=wpa_password_confirm]").val()) {
                                return err("Password mismatch.", o);
                            }
                            if (!checkWPAKeyFormat(v)) {
                                return err("WPA password must not contain the characters \" and `", o);
                            }
                            tmp["password"] = v;
                            break;
                        case "TLS":
                            // CA Certificate
                            // Client Certificate
                            o = me.find("[name=cert_client]");
                            v = o.find("option:selected").val();
                            if (isempty(v)) {
                                return err("Client Certificate cannot be empty", o);
                            }
                            tmp["certificate"] = {
                                ca: me.find("[name=cert_ca] option:selected").val() || null,
                                client: v
                            };
                            break;
                        }
    
                        // EAP Phase 2 Method
                        o = me.find("[name=eap_method_2] option:selected");
                        tmp["phase2Method"] = o.val();
    
                        // EAP Outer Authentication Identity
                        o = me.find("[name=eap_auth]:visible");
                        v = o.filter(":checked").val();
                        switch (v) {
                        case "other":
                            o = me.find("[name=eap_auth_other]");
                            v = trim(o.val());
                            if (!checkAlphanumeric(v)) {
                                return err("EAP outer authentication identity must be letters and digits", o);
                            }
                            o.val(v);
                            break;
                        case undefined:
                            return err("EAP outer authentication identity must not be empty", o.first(), o.parent())
                            break;
                        default:
                            break;
                        }
                        tmp["outerAuthenticationId"] = v;
                        break;
                    case "open":
                    default:
                        break;
                    case "wep":
                        o = me.find("[name=wep_key]");
                        v = trim(o.val());
                        if (!checkWEPKeyFormat(v)) {
                            err("WEP Encryption Key must not contain the characters \" and `", o);
                        }
                        switch (v.length) {
                        case 5: case 13:	// Any qualified ASCII is allowed
                            break;
                        case 10: case 26:	// Only hexadecimal is allowed
                            if ((/^[0-9A-Fa-f]+$/.test(v))) {
                                break;
                            }
                        // Passing through this to reach the default error handling
                        default:
                            return err("Invalid WEP Encryption Key.", o);
                        }
                        o.val(v);
                        tmp = {
                            key: v
                        }
                        break;
                    }
                    if ($.isPlainObject(tmp)) {
                        data["security"]["policy"]["detail"] = tmp;
                    }
    
                    // Preferred BSSID
                    if (me.find("[name=has_preferred_bssid]").is(":checked")) {
                        o = me.find("[name=preferred_bssid]");
                        o.val(trim(o.val()).toUpperCase());
                        if (isempty(o.val())) {
                            me.find("[name=has_preferred_bssid]").prop("checked", false);
                        } else if (!checkMACFormat(o.val())) {
                            return err("Invalid " + o.closest("tr").find(".form_field").text(), o);
                        }
                        v = o.val();
                    } else {
                        v = null;
                    }
                    data["preferredBssid"] = v;
    
                    if (!!(o = me.data("conn_method_panel"))) {
                        if (!o.triggerHandler("validate")) {
                            return false;
                        }
                        v = o.triggerHandler("export_conn_method");
                        data["conn"] = {
                            method: {
                                detail: v["detail"],
                                type: v["type"]
                            },
                            dns: o.triggerHandler("export_dns_server")
                        };
                    }
    
                    return data;
                })
                .on("validate.wifi_connection_table", function(e) {
                    return $(this).triggerHandler("export", [ false ]) !== false;
                })
                .on("click change keyup", ".check_action", function(e) {
                    $(e.delegateTarget).triggerHandler("redraw");
                })
    
                return table;
            };
    
        // Wifi Connection Profile Settings dialog
        var __create_wifi_profile_dialog = function(_param) {
            var	param = _param || {},
                panel = {
                    wifi_table: __create_wifi_connection_table({
                        save_and_connect: param["save_and_connect"]
                    }).addClass("sep")
                },
                buttons = {
                    "connect": {
                        text: "Connect",
                        click: function() {
                            var	me = $(this),
                                cb = me.data("callback"),
                                o, v, data;
    
                            v = me.triggerHandler("export", [ false ]);
                            if (v === false) {
                                return false;
                            }
    
                            data = {
                                "func": "cmd.wifi.connect",
                                "connId": me.data("info")["conn_id"],
                                "ssid": v["ssid"],
                                "security": v["security"],
                                "preferredBssid": v["preferredBssid"]
                            };
    // Legacy way of API param, dropping out...
    /*
                            data["securityPolicy"] = v["security"]["policy"]["type"],
                            o = v["security"]["policy"]["detail"] || {};
                            if (_e(o["key"])) {
                                data["key"] = o["key"];
                            }
    */
    
                            $.ajax("api.cgi", {
                                cache: false,
                                type: "POST",
                                contentType: "application/json; charset=UTF-8",
                                data: JSON.stringify(data),
                                context: this
                            })
                            .then(api_cgi_filter)
                            .done(function() {
                                $(this).dialog("close");
                            });
                        }
                    },
                    "ok": {
                        text: "OK",
                        click: function() {
                            var	me = $(this),
                                __cb,
                                data;
    
                            data = me.triggerHandler("export", [ false ]);
                            if (data === false) {
                                return false;
                            }
    
                            __cb = me.data("callback");
                            if (__cb) {
                                __cb.triggerHandler("update_row", [ data ]);
                            }
    
                            me.dialog("close");
                        }
                    },
                    "cancel": {
                        text: "Cancel",
                        click: function() {
                            $(this).dialog("close");
                        }
                    }
                },
                div = $("<div/>");
    
            div
            .data({
                "panel": panel,
                "callback": param["callback"]
            })
            .addClass("wifi_profile_dialog")
            .dialog($.extend(std_dialog_param(), {
                close: function() {
                    nd(); err();
                    // As the ".data" object will be removed,
                    // the option_hide can never be retrieve again
                    $(this).find("select").children().toggleOption(true);
                },
                buttons: [ param["save_and_connect"] ?
                    buttons["connect"] : buttons["ok"],
                    buttons["cancel"]
                ]
            })).append(
                panel["wifi_table"]
            );
            if (!!(panel["conn_method"] = panel["wifi_table"].data("conn_method_panel"))) {
                panel["conn_method"].triggerHandler("reposition", [ panel["conn_method"] ]);
            }
            div
            .on("init.wifi_profile_dialog", function(e, _ref) {
                var	me = $(this),
                    ref = _ref || {},
                    wifi_table = me.data("panel")["wifi_table"];
                me.find("[name=auth]").children().each(function() {
                    var o = $(this);
                    o.toggleOption(
                        $.inArray(o.val(), ref["supportSecurityPolicy"]) != -1
                    )
                })
                wifi_table.triggerHandler("init", [ _ref ]);
            })
            .on("__reset.wifi_profile_dialog", function() {
                var	me = $(this),
                    wifi_table = me.data("panel")["wifi_table"];
    
                me.removeData("info");
                wifi_table.triggerHandler("__reset");
                me.find(".ui-passphrase-widget").each(function() {
                    $(this).triggerHandler("reset");
                });
    
            })
            .on("__set.wifi_profile_dialog", function(e, _info) {
                var	me = $(this),
                    wifi_table = me.data("panel")["wifi_table"];
    
                me.data("info", _info);
                wifi_table.triggerHandler("__set", [ _info ]);
            })
            .on("redraw.wifi_profile_dialog", function(e) {
                var	me = $(this),
                    wifi_table = me.data("panel")["wifi_table"],
                    is_edit = me.data("is_edit");
    
                wifi_table.triggerHandler("redraw");
                me
                .find(".add_mode").toggleClass("hide", !!is_edit).end()
                .find(".edit_mode").toggleClass("hide", !is_edit).end();
                if (me.data("create_with_info")) {
                    me.find("[name=wifi_profile_auto]")
                        .closest("tr").toggleClass("hide", true)
                }
            })
            .on("open_dialog.wifi_profile_dialog", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var def_info = {
                    port: { type: "wifi" },
                    conn: { method: "dhcp" }
                };
                var is_edit = !$.isEmptyObject(info);
                var	o;
    
                me.triggerHandler("__reset");
                if (!$.isEmptyObject(info)) {
                    me.triggerHandler("__set", [ info ]);
                } else {
                    // TODO: This is ad-hoc calibration when add new.
                    // If this object is well defined, we don't need this
                    // special call at all.
                    if (!!(o = panel["conn_method"])) {
                        o.triggerHandler("__set", [
                            def_info
                        ])
                    }
                }
                me.data("conn_id", info["conn_id"]);
                me.data("is_edit", is_edit);
                me.data("create_with_info", info["create_with_info"]);
                me.triggerHandler("redraw");
                me.dialog("option", "title",
                    ( is_edit && !info["create_with_info"] ? "Edit" : "Create" ) +
                    " Wi-Fi Connection Profile");
    
                me.dialog("open");
            })
            .on("export.wifi_profile_dialog", function(e, silent_mode) {
                var	me = $(this),
                    err = silent_mode === undefined || silent_mode ?
                        function() { return false; } : window.err,
                    wifi_table = me.data("panel")["wifi_table"],
                    data, o;
    
                data = wifi_table.triggerHandler("export", [ silent_mode ]);
                if (data === false) {
                    return false;
                }
    
                o = me.data("info") || {};
                data["id"] = o["id"] || 0;
    
                return data;
            })
            .on("validate.wifi_profile_dialog", function() {
                return $(this).triggerHandler("export", [ false ]) !== false;
            });
    
            return div;
        }
        // Wi-Fi Specific Settings
        var __create_wifi_settings_table = function() {
            var panel = {
                channel: create_ch_settings_panel({
                    type: "wifiwan"
                })
            }
            var table = $("<table/>").addClass("form_table sep wifi_settings wifi")
            .data({
                panel: panel
            }).append(
                $("<thead/>").append(
                    create_form_title("Wi-Fi WAN Settings", "wifi.adv")
                ),
                $("<tbody/>").addClass("country_panel").append(
                    create_form_row("Operating Country",
                        $("<select/>", {
                            name: "country_code"
                        })
                        .addClass("country_action")
                        .append(
                            create_option_array(wifi_country_list())
                        )
                    )
                ),
                panel["channel"],
                $("<tbody/>").append(
                    create_form_row("Data Rate", $.merge(
                        create_radio_input("data_rate_fixed", [{
                            text: "Auto",
                            value: "no",
                            className: "check_action"
                        }, {
                            text: "Fixed",
                            value: "yes",
                            className: "check_action"
                        }]), [
                            $("<select/>", { name: "data_rate" }).addClass("data_rate_action").append(
                                create_option_array(
                                    $.map(new Array(10), function(_, i) {
                                        var v = "MCS" + i;
                                        return [[ v, v ]];
                                    })
                                )
                            ),
                        ]
                    )),
                    create_form_row("Roaming", create_checkbox({
                        "roaming_enable": {
                            value: "yes",
                            text: "Enable",
                            __class: "check_roaming_action"
                        }
                    }))
                ),
                $("<tbody/>").addClass("normal advanced express roaming_algo_panel").append(
                    create_form_row("Roaming Algorithm",
                        create_radio_input("roaming_algo", [{
                            text: "Normal",
                            value: "normal",
                            className: "check_roaming_action"
                        }, {
                            text: "Advanced",
                            value: "advanced",
                            className: "check_roaming_action"
                        }, {
                            text: "Express",
                            value: "express",
                            className: "check_roaming_action"
                        }])
                    )
                ),
                $("<tbody/>").addClass("normal advanced").append(
                    create_form_row("Roaming Signal Level Threshold", [
                        $("<input/>", {
                            name: "roaming_rssi_threshold",
                            maxlength: 3,
                            placeholder: "-75"
                        }).attr("size", 5).data("def_value", "-75"),
                        " dBm"
                    ]),
                    create_form_row("Roaming Signal Level Gain", [
                        $("<input/>", {
                            name: "roaming_signal_gain",
                            maxlength: 3,
                            placeholder: "5"
                        }).attr("size", 5).data("def_value", "5"),
                        " dBm"
                    ]),
                    create_form_row("Roaming Check Interval", [
                        $("<input/>", {
                            name: "roaming_check_interval",
                            maxlength: "4",
                            placeholder: "30"
                        }).attr("size", "5").data("def_value", "30"),
                        " seconds"
                    ])
                ),
                $("<tbody/>").addClass("advanced").append(
                    create_form_row("Intensive Scan",
                        create_checkbox({
                            "carfi_intensive_scan_enable": { value: "yes", text: "Enable", __class: "check_roaming_action" }
                        })
                    ),
                    // Carfi Dynamic Scan
                    create_form_row("Intensive Scan Signal Level", [
                        $("<input/>", {
                            name: "carfi_intensive_scan_signal_level",
                            maxlength: 3,
                            placeholder: "-60"
                        }).attr("size", 5).data("def_value", "-60"),
                        " dBm"
                    ]).addClass("carfi_intensive_scan_panel"),
                    create_form_row("Intensive Scan Interval", [
                        $("<input/>", {
                            name: "carfi_intensive_scan_interval",
                            maxlength: 4,
                            placeholder: "2"
                        }).attr("size", 5).data("def_value", "2"),
                        " seconds"
                    ]).addClass("carfi_intensive_scan_panel")
                ),
                $("<tbody/>").addClass("express").append(
                    create_form_row("Diagnostic Level",
                        $("<select/>", { name: "express_diag_lvl" }).append(
                            $.map([ "minimum", "basic", "detail" ], function(v) {
                                return $("<option/>").val(v).text(
                                    v.charAt(0).toUpperCase() + v.slice(1)
                                );
                            })
                        )
                    ),
                    create_form_row("Signal Mode",
                        $("<select/>", { name: "express_signal_mode" })
                            .addClass("check_roaming_action").append(
                            $.map([ "relative", "absolute" ], function(v) {
                                return $("<option/>").val(v).text(
                                    v.charAt(0).toUpperCase() + v.slice(1)
                                );
                            })
                        )
                    ),
                    create_form_row("Minimum Signal Difference", [
                        $("<input/>", {
                            name: "express_min_signal_diff",
                            maxlength: 2,
                            placeholder: "2"
                        }).attr("size", 3).data("def_value", "2"),
                        $("<span/>").text("dBm").css({ "margin-left": "3px" })
                    ]).addClass("signal_mode relative"),
                    create_form_row("Upper Signal Threshold", [
                        $("<input/>", {
                            name: "express_upper_signal_thres",
                            maxlength: 3,
                            placeholder: "-20"
                        }).attr("size", 3).data("def_value", "-20"),
                        $("<span/>").text("dBm").css({ "margin-left": "3px" })
                    ]).addClass("signal_mode absolute"),
                    create_form_row("Lower Signal Threshold", [
                        $("<input/>", {
                            name: "express_lower_signal_thres",
                            maxlength: 3,
                            placeholder: "-50"
                        }).attr("size", 3).data("def_value", "-50"),
                        $("<span/>").text("dBm").css({ "margin-left": "3px" })
                    ]).addClass("signal_mode absolute"),
                    create_form_row("Inner Dynamic Zone", [
                        $("<input/>", {
                            name: "express_inner_dynamic_zone",
                            maxlength: 2,
                            placeholder: "1"
                        }).attr("size", 3).data("def_value", "1"),
                        $("<span/>").text("dBm").css({ "margin-left": "3px" })
                    ]).addClass("signal_mode absolute"),
                    create_form_row("Outer Dynamic Zone", [
                        $("<input/>", {
                            name: "express_outer_dynamic_zone",
                            maxlength: 2,
                            placeholder: "3"
                        }).attr("size", 3).data("def_value", "3"),
                        $("<span/>").text("dBm").css({ "margin-left": "3px" })
                    ]).addClass("signal_mode absolute"),
                    create_form_row("Force Roam",
                        create_checkbox({
                            "express_force_roam_enable": {
                                value: "yes",
                                text: "Enable",
                                __class: "check_roaming_action"
                            }
                        })
                    ),
                    create_form_row("Force Roam Threshold", [
                        $("<input/>", {
                            name: "express_force_roam_thres",
                            maxlength: 3,
                            placeholder: "-80"
                        }).attr("size", 3).data("def_value", "-80"),
                        $("<span/>").text("dBm").css({ "margin-left": "3px" })
                    ]).addClass("force_roam_panel"),
                    create_form_row("Confirmation Period", [
                        $("<input/>", {
                            name: "express_confirm_period",
                            placeholder: "500"
                        }).data("def_value", "500"),
                        $("<span/>").text("ms").css({ "margin-left": "3px" })
                    ]),
                    create_form_row("Backup Disconnection",
                        $("<select/>", { name: "express_backup_disconnect_mode" })
                        .addClass("check_roaming_action").append(
                            $("<option/>").val("delay").text("Delayed (with buffer time)"),
                            $("<option/>").val("no").text("No"),
                            $("<option/>").val("immediate").text("Immediately")
                        )
                    ),
                    create_form_row("Backup Scanning Delay", [
                        $("<input/>", {
                            name: "express_backup_disconnect_delay",
                            placeholder: "1000"
                        }).data("def_value", "1000"),
                        $("<span/>").text("ms").css({ "margin-left": "3px" })
                    ]).addClass("backup_panel"),
                    create_form_row("Authentication Timeout", [
                        $("<input/>", {
                            name: "express_auth_timeout",
                            placeholder: "2500"
                        }).data("def_value", "2500"),
                        $("<span/>").text("ms").css({ "margin-left": "3px" })
                    ])
                ),
                $("<tbody>").append(
                    create_form_row("Connect to Any Open Mode AP",
                        create_radio_input("auto_connect", [{
                            text: "Yes",
                            value: "yes"
                        }, {
                            text: "No",
                            value: "no"
                        }]), "wifi.autoConnect"
                    ),
                    create_form_row("Beacon Miss Counter",
                        $("<input/>", { name: "beacon_miss", maxlength: "3", placeholder: "5" })
                            .attr("size", 5)
                    ).addClass("hide wifi_adv_settings"),
                    // [Bug#16257] Configurable Channel Scan Interval
                    create_form_row("Channel Scan Interval", [
                        $("<input/>", {
                            name: "scan_interval",
                            maxlength: "4",
                            placeholder: "50"
                        }).attr("size", 5),
                        $("<span/>").text("ms")
                        .css({ "margin-left": "3px" })
                    ]).addClass("hide wifi_adv_settings")
                )
            );
    
            table
            .addClass("ctrl")
            .on("show_wifi_adv_settings", function(e) {
                $(this).find(".wifi_adv_settings")
                .toggleClass("hide", false);
            });
    
            table
            .on("init.wifi_settings", function(e, _ref) {
                var me = $(this);
                var panel = me.data("panel");
                var ref = _ref || {};
                var policy = {};
                me.data({
                    "roaming_option": ref["roaming_option"],
                    "radio_policy": ref["radio_policy"]
                });
                me.find(".country_panel").toggleClass("hide",
                    ref["support_ap"]).end()
                .find("[name=roaming_algo]").toggleClass("hide", false)
                    .filter(function() {
                        return $.inArray($(this).val(), ref["roaming_option"]) == -1;
                    }).closest("label").toggleClass("hide", true).end()
                    .end()
                .end()
                .find(".roaming_algo_panel").toggleClass("hide",
                    ref["roaming_option"].length <= 1)
                .end();
    
                panel["channel"].triggerHandler("__setup", [ [ ref["radio_policy"] ] ]);
            })
            .on("__set.wifi_settings", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var panel = me.data("panel");
                var roam = info["roaming"] || {};
                var o, v;
                me.find("[name=country_code]")
                    .find("[value=\"" + info["country_code"] + "\"]")
                        .prop("selected", true)
                    .end()
                .end()
                .find("[name=data_rate_fixed]")
                    .filter("[value=" + (_e(info["data_rate"]) ? "yes" : "no") +
                        "]").prop("checked", true)
                    .end()
                .end()
                .find("[name=data_rate]")
                    .find(":first, [value=\"" + info["data_rate"] + "\"]")
                        .last().prop("selected", true).end()
                    .end()
                .end()
                .find("[name=roaming_enable]").prop("checked", roam["enable"]).end()
                .find("[name=roaming_algo]")
                    .filter(":first, [value=\"" + roam["algo"] + "\"]")
                        .last().prop("checked", true).end()
                    .end()
                .end()
                .find("[name=auto_connect]")
                    .filter("[value=\"" + (
                        info["auto_connect"] ? "yes" : "no"
                        ) + "\"]").prop("checked", true)
                    .end()
                .end()
                .find("[name=beacon_miss]").val(
                    info["beacon_miss_counter"] > 0 ?
                        info["beacon_miss_counter"] : ""
                ).end()
                .find("[name=scan_interval]").val(
                    info["scan_interval"] > 0 ?
                        info["scan_interval"] : ""
                ).end()
                switch (roam["algo"]) {
                case "advanced":
                    me.find("[name=carfi_intensive_scan_enable]")
                        .prop("checked", roam["intensive"]["enable"])
                    .end()
                    .find("[name=carfi_intensive_scan_signal_level]").val(
                        roam["intensive"]["signal"]
                    ).end()
                    .find("[name=carfi_intensive_scan_interval]").val(
                        roam["intensive"]["interval"]
                    ).end()
                    // No break intentionally
                case "normal":
                    me.find("[name=roaming_rssi_threshold]").val(
                        roam["signal"]["threshold"]
                    ).end()
                    .find("[name=roaming_signal_gain]").val(
                        roam["signal"]["gain"]
                    ).end()
                    .find("[name=roaming_check_interval]").val(
                        roam["interval"]
                    ).end()
                    break;
                case "express":
                    me.find("[name=express_diag_lvl]")
                        .find(":first, [value=\"" + roam["diag_level"] +"\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end()
                    .find("[name=express_signal_mode]")
                        .find(":first, [value=\"" + roam["signal_mode"] +"\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end()
                    .find("[name=express_force_roam_enable]")
                        .prop("checked", roam["force_roam"]["enable"])
                    .end()
                    .find("[name=express_force_roam_thres]").val(
                        roam["force_roam"]["enable"] ?
                            roam["force_roam"]["threshold"] : ""
                    ).end()
                    .find("[name=express_confirm_period]").val(
                        roam["confirm_period"]
                    ).end()
                    .find("[name=express_backup_disconnect_mode]")
                        .find(":first, [value=\"" + roam["backup_disconnect"]["mode"] +"\"]")
                            .last().prop("selected", true).end()
                        .end()
                    .end()
                    .find("[name=express_backup_disconnect_delay]").val(
                        roam["backup_disconnect"]["mode"] == "delay" ?
                            roam["backup_disconnect"]["delay"] : ""
                    ).end()
                    .find("[name=express_auth_timeout]").val(
                        roam["auth_timeout"]
                    ).end()
                    switch (roam["signal_mode"]) {
                    case "relative":
                        me.find("[name=express_min_signal_diff]").val(
                            roam["min_signal_diff"]
                        );
                        break;
                    case "absolute":
                        me.find("[name=express_upper_signal_thres]").val(
                            roam["upper_signal_thres"]
                        ).end()
                        .find("[name=express_lower_signal_thres]").val(
                            roam["lower_signal_thres"]
                        ).end()
                        .find("[name=express_inner_dynamic_zone]").val(
                            roam["inner_dynamic_zone"]
                        ).end()
                        .find("[name=express_outer_dynamic_zone]").val(
                            roam["outer_dynamic_zone"]
                        ).end()
                        break;
                    }
                    break;
                }
                panel["channel"].triggerHandler("__set", [{
                    country_code: info["country_code"],
                    radio_profile: [{
                        channel_width: info["channel_width"],
                        serial_channel_list: info["serial_channel_list"],
                        txlevel: info["txlevel"],
                        txboost: info["txboost"],
                        policy: me.data("radio_policy")
                    }]
                }]);
            })
            .on("redraw.wifi_settings", function() {
                var me = $(this);
                var panel = me.data("panel");
                var o;
                o = me.find("[name=beacon_miss]");
                if (_e(o.val())) {
                    o.closest("tr").toggleClass("hide", false);
                }
                o = me.find("[name=scan_interval]");
                if (_e(o.val())) {
                    o.closest("tr").toggleClass("hide", false);
                }
                me.triggerHandler("redraw_data_rate");
                me.triggerHandler("redraw_roaming");
                panel["channel"].triggerHandler("redraw");
            })
            .on("redraw_data_rate.wifi_settings", function() {
                var me = $(this);
                var v = +me.find("[name^=ap_ch_width]:visible option:selected").val();
                me.find("[name=data_rate]").toggleClass("hide",
                    me.find("[name=data_rate_fixed]:checked").val() != "yes");
                // MCS8 and MCS9 only available for 80 MHz
                me.find("[name=data_rate]").children().toggleOption(true);
                // Remarks: This has to break down into 2 sentence, otherwise would cause JavaScript Error
                me.find("[name=data_rate]").children()
                .filter(function() {
                    return +$(this).val().replace(/[^\d.]/g, "") > 7;
                }).toggleOption(v == 4)
            })
            .on("redraw_roaming.wifi_settings", function() {
                var me = $(this);
                var is_enable = me.find("[name=roaming_enable]").is(":checked");
                var algo = me.find(":first, [name=roaming_algo]:checked").last().val();
                me.find(".normal,.advanced,.express").toggleClass("hide", true)
                .filter("." + algo).toggleClass("hide", !is_enable);
                me.find(".roaming_algo_panel").toggleClass("hide", !is_enable || me.data("roaming_option").length <= 1);
                me.find(".carfi_intensive_scan_panel").toggleClass("hide",
                    !me.find("[name=carfi_intensive_scan_enable]").is(":checked")
                ).end()
                me.find(".express")
                    .find(".relative,.absolute").toggleClass("hide", true)
                        .filter("." + me.find("[name=express_signal_mode] option:selected").val())
                        .toggleClass("hide", false).end()
                    .end()
                    .find("[name=express_force_roam_thres]").closest("tr").toggleClass("hide",
                        !me.find("[name=express_force_roam_enable]").is(":checked")
                    ).end().end()
                    .find("[name=express_backup_disconnect_delay]").closest("tr").toggleClass("hide",
                        me.find("[name=express_backup_disconnect_mode] option:selected").val() != "delay"
                    ).end().end()
            })
            .on("validate.wifi_settings", function() {
                var me = $(this);
                var o, r;
                var __err = function(feature, r, o) {
                    return err([
                        feature,
                        "must be between",
                        r["min"], "and", r["max"]
                    ].join(" "), o);
                }
                var __checkNumberFormat = function(v, r) {
                    var is_number = /^-?\d+$/.test(v);
                    return !!(is_number &&
                        (r["min"] == undefined || +r["min"] <= +v) &&
                        (r["max"] == undefined || +v <= +r["max"]));
                }
                var __check_normal_panel = function(me) {
                    var o, r;
                    o = me.find("[name=roaming_rssi_threshold]");
                    o.val(trim(o.val()));
                    r = { min: -95, max: -40 };
                    if (!_e(o.val())) {
                        o.val(o.data("def_value"));
                    }
                    if (!__checkNumberFormat(o.val(), r)) {
                        return __err("Signal Level Threshold", r, o);
                    }
                    r = { min: 5, max: 55 };
                    o = me.find("[name=roaming_signal_gain]");
                    o.val(trim(o.val()));
                    if (!_e(o.val())) {
                        o.val(o.data("def_value"));
                    }
                    if (!checkIntFormat(o.val(), r)) {
                        return __err("Signal Level Gain", r, o);
                    }
                    r = { min: 5, max: 3600 };
                    o = me.find("[name=roaming_check_interval]");
                    o.val(trim(o.val()));
                    if (!_e(o.val())) {
                        o.val(o.data("def_value"));
                    }
                    if (!checkIntFormat(o.val(), r)) {
                        return __err("Check Interval", r, o);
                    }
                    return true;
                }
                if (me.find("[name=roaming_enable]").is(":checked")) {
                    switch (me.find("[name=roaming_algo]:checked").val()) {
                    case "normal":
                        if (!__check_normal_panel(me)) {
                            return false;
                        }
                        break;
                    case "advanced":
                        if (!__check_normal_panel(me)) {
                            return false;
                        }
                        if (me.find("[name=carfi_intensive_scan_enable]").is(":checked")) {
                            o = me.find("[name=carfi_intensive_scan_signal_level]");
                            o.val(trim(o.val()));
                            r = { min: -95, max: -40 };
                            if (!_e(o.val())) {
                                o.val(o.data("def_value"));
                            }
                            if (!__checkNumberFormat(o.val(), r)) {
                                return __err("Signal Level Threshold", r, o);
                            }
                            r = { min: 1, max: 3600 };
                            o = me.find("[name=carfi_intensive_scan_interval]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.data("def_value"));
                            }
                            if (!checkIntFormat(o.val(), r)) {
                                return __err("Intensive Scan Interval", r, o);
                            }
                        }
                        break;
                    case "express":
                        if (me.find("[name=express_signal_mode] option:selected").val() == "relative") {
                            r = { min: 0, max: 94 };
                            o = me.find("[name=express_min_signal_diff]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.data("def_value"));
                            }
                            if (!checkIntFormat(o.val(), r)) {
                                return __err("Minimum Signal Difference", r, o);
                            }
                        } else {
                            r = { min: -95, max: -1 };
                            o = me.find("[name=express_upper_signal_thres]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.attr("placeholder"));
                            }
                            if (!__checkNumberFormat(o.val(), r)) {
                                return __err("Upper Signal Threshold", r, o);
                            }
                            o = me.find("[name=express_lower_signal_thres]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.attr("placeholder"));
                            }
                            if (!__checkNumberFormat(o.val(), r)) {
                                return __err("Lower Signal Threshold", r, o);
                            }
                            r = { min: 0, max: 95 };
                            o = me.find("[name=express_inner_dynamic_zone]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.attr("placeholder"));
                            }
                            if (!checkIntFormat(o.val(), r)) {
                                return __err("Inner Dynamic Zone", r, o);
                            }
                            o = me.find("[name=express_outer_dynamic_zone]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.attr("placeholder"));
                            }
                            if (!checkIntFormat(o.val(), r)) {
                                return __err("Outer Dynamic Zone", r, o);
                            }
                            if (me.find("[name=express_force_roam_enable]").is(":checked")) {
                                r = { min: -95, max: -1 };
                                o = me.find("[name=express_force_roam_thres]");
                                o.val(trim(o.val()));
                                if (!_e(o.val())) {
                                    o.val(o.attr("placeholder"));
                                }
                                if (!__checkNumberFormat(o.val(), r)) {
                                    return __err("Force Roam Threshold", r, o);
                                }
                            }
                            r = { min: 0 };
                            o = me.find("[name=express_confirm_period]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.attr("placeholder"));
                            }
                            if (!checkIntFormat(o.val(), r)) {
                                return err("Confirmation Period must be greater than 0", o);
                            }
                            if (me.find("[name=express_backup_disconnect_mode] option:selected").val() == "delay") {
                                o = me.find("[name=express_backup_disconnect_delay]");
                                o.val(trim(o.val()));
                                if (!_e(o.val())) {
                                    o.val(o.attr("placeholder"));
                                }
                                if (!checkIntFormat(o.val(), r)) {
                                    return err("Backup Scanning Delay must be greater than 0", o);
                                }
                            }
                            o = me.find("[name=express_auth_timeout]");
                            o.val(trim(o.val()));
                            if (!_e(o.val())) {
                                o.val(o.attr("placeholder"));
                            }
                            if (!checkIntFormat(o.val(), r)) {
                                return err("Authentication Timeout must be greater than 0", o);
                            }
                        }
                        break;
                    }
                }
                o = me.find("[name=beacon_miss]");
                if (o.is(":visible") && !isempty(o.val())) {
                    o.val(trim(o.val()));
                    r = { min: 2, max: 100 };
                    if (!checkIntFormat(o.val(), r)) {
                        return __err("Beacon Miss Counter", r, o);
                    }
                } else {
                    o.val("");
                }
                o = me.find("[name=scan_interval]");
                if (o.is(":visible") && !isempty(o.val())) {
                    o.val(trim(o.val()));
                    r = { min: 50, max: 1000 };
                    if (!checkIntFormat(o.val(), r)) {
                        return __err("Channel Scan Interval", r, o);
                    }
                } else {
                    o.val("");
                }
                return true;
            })
            .on("export.wifi_settings", function() {
                var me = $(this);
                var panel = me.data("panel");
                var res, o, v;
                var roaming_o;
                if (me.is(":visible")) {
                    res = {};
                    o = me.find("[name=country_code]");
                    if (o.is(":visible")) {
                        res["country"] = +o.find("option:selected").val();
                    }
                    $.extend(res, panel["channel"].triggerHandler("export"));
                    o = me.find("[name=data_rate_fixed]");
                    res["dataRate"] = o.filter(":checked").val() == "no" ? null :
                        me.find("[name=data_rate] option:selected").val();
                    res["roaming"] = {
                        enable: me.find("[name=roaming_enable]").is(":checked")
                    };
                    if (res["roaming"]["enable"]) {
                        roaming_o = {};
                        res["roaming"]["algorithm"] = {
                            type: me.find("[name=roaming_algo]:checked").val(),
                            detail: roaming_o
                        };
                        switch (res["roaming"]["algorithm"]["type"]) {
                        case "advanced":
                            roaming_o["intensiveScan"] = {
                                enable: me.find("[name=carfi_intensive_scan_enable]").is(":checked")
                            };
                            if (roaming_o["intensiveScan"]["enable"]) {
                                $.extend(roaming_o["intensiveScan"], {
                                    signalLevel: +me.find("[name=carfi_intensive_scan_signal_level]").val(),
                                    scanInterval: +me.find("[name=carfi_intensive_scan_interval]").val(),
                                });
                            }
                            // no break intentionally
                        case "normal":
                            roaming_o["signalLevel"] = {
                                threshold: +me.find("[name=roaming_rssi_threshold]").val(),
                                gain: +me.find("[name=roaming_signal_gain]").val()
                            };
                            roaming_o["checkInterval"] = +me.find("[name=roaming_check_interval]").val()
                            break;
                        case "express":
                            roaming_o["diagnosticLevel"] = me.find("[name=express_diag_lvl] option:selected").val();
                            roaming_o["signalMode"] = {
                                type: me.find("[name=express_signal_mode] option:selected").val()
                            }
                            switch (roaming_o["signalMode"]["type"]) {
                            case "relative":
                                o = {
                                    minimumSignalDifference: +me.find("[name=express_min_signal_diff]").val()
                                };
                                break;
                            case "absolute":
                                o = {
                                    signalThreshold: {
                                        upper: +me.find("[name=express_upper_signal_thres]").val(),
                                        lower: +me.find("[name=express_lower_signal_thres]").val()
                                    },
                                    dynamicZone: {
                                        inner: +me.find("[name=express_inner_dynamic_zone]").val(),
                                        outer : +me.find("[name=express_outer_dynamic_zone]").val()
                                    }
                                }
                                break;
                            }
                            roaming_o["signalMode"]["detail"] = o;
                            roaming_o["forceRoam"] = {
                                enable: me.find("[name=express_force_roam_enable]").is(":checked")
                            }
                            if (roaming_o["forceRoam"]["enable"]) {
                                roaming_o["forceRoam"]["threshold"] = +me.find("[name=express_force_roam_thres]").val()
                            }
                            o = me.find("[name=express_confirm_period]");
                            roaming_o["confirmPeriod"] = _e(o.val()) ? +o.val() : +o.attr("placeholder");
                            roaming_o["backupDisconnect"] = {
                                mode: me.find("[name=express_backup_disconnect_mode] option:selected").val()
                            }
                            if (roaming_o["backupDisconnect"]["mode"] == "delay") {
                                o = me.find("[name=express_backup_disconnect_delay]");
                                roaming_o["backupDisconnect"]["delay"] = _e(o.val()) ? +o.val() : +o.attr("placeholder");
                            }
                            o = me.find("[name=express_auth_timeout]");
                            roaming_o["authenticationTimeout"] = _e(o.val()) ? +o.val() : +o.attr("placeholder");
                            break;
                        }
                    }
                    res["autoConnect"] = me.find("[name=auto_connect]:checked").val() == "yes";
                    o = me.find("[name=beacon_miss]");
                    if (o.is(":visible")) {
                        res["beaconMissCounter"] = _e(o.val()) ? +o.val() : +o.attr("placeholder");
                    }
                    o = me.find("[name=scan_interval]");
                    if (o.is(":visible")) {
                        res["channelScanInterval"] = _e(o.val()) ? +o.val() : +o.attr("placeholder");
                    }
                }
                return res;
            })
            .on("change keyup", ".country_action", function(e) {
                var	me = $(e.delegateTarget),
                    panel = (me.data("panel") || {})["channel"],
                    o, v;
    
                if (panel) {
                    o = me.find("[name=country_code]");
                    v = o.val();
                    panel.triggerHandler("update_country", [ v ]);
                }
            })
            .on("click", ".check_roaming_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw_roaming");
            })
            .on("change keyup", ".check_roaming_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw_roaming");
            })
            .on("change keyup", ".channel_width_action", function(e) {
                var me = $(e.delegateTarget);
                me.triggerHandler("redraw_data_rate");
            })
            .on("click", ".check_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw_data_rate");
            })
            return table;
        }
        var __create_wifi_profile_table = function() {
            var tr_tmpl = $("<tr/>").addClass("tablecontent2 sort_item").append(
                $("<td/>").addClass("tabletitle2").append(
                    $("<div/>").append(
                        $("<div/>").addClass("handle fas"),
                        $("<div/>").addClass("name").append(
                            $("<a/>", { href: "#" }).addClass("ssid linkedName edit_action")
                        )
                    ),
                ).css({
                    "position": "relative"
                }),
                $("<td/>").append(
                    $("<div/>").append(
                        $("<span/>").addClass("fas fa-fw fa-lock security_icon"),
                        $("<span/>").addClass("security_text")
                    )
                ),
                $("<td/>").append(
                    $("<button/>", { type: "button" })
                        .addClass("icon trashIcon fas remove_action")
                )
            );
            var table = $("<table/>");
            table
            .data({
                "dialog": __create_wifi_profile_dialog({ callback: table }),
                "tr_tmpl": tr_tmpl
            })
            .addClass("form_table sep wifi_profile draggable_table_38").append(
                $("<thead/>").append(
                    create_form_title("Wi-Fi Connection Profiles", "wifi.connProfile", tr_tmpl.find("td").length),
                    $("<tr/>").addClass("tablecontent3").append(
                        $("<td/>").append("Network Name (SSID)")
                        .css({
                            "width": "30%"
                        }),
                        $("<td/>").append("Security"),
                        $("<td/>").addClass("button")
                    ).css({ "height": "18px", "font-size": "12px" })
                ),
                $("<tbody/>").addClass("wifi_sortable").sortable({
                    "distance": 3,
                    "revert": 200,
                    "tolerance": "pointer",
                    "items": ".sort_item, .fixed_sort_item",
                    "handle": ".handle",
                    "cancel": ".fixed_sort_item, .icon, a",
                    "helper": function(e, ui) {
                        ui.children().each(function() {
                            $(this).width($(this).width());
                        });
                        return ui;
                    },
                    "update": function(e, ui) {
                        var me = $(this);
                        /*
                        me.closest("table.wifi_profile").data("profile_info")["order"] =
                            me.sortable("toArray", {"attribute": "profile_id"});
                            */
                        // update row position
                    }
                }),
                $("<tfoot/>").append(
                    $("<tr/>").append($("<td/>", {"colspan": "3"}).append(
                        $("<a/>", {"href": "#"}).addClass("add_action").append("Create Profile...")
                    ).css({"border-width": "0"}))
                ).css({"background-color": "#FFF"})
            )
            .on("init.wifi_profile", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                me.data("support_auth_8021x", !!info["support_auth_8021x"]);
                me.data("supportSecurityPolicy", info["supportSecurityPolicy"]);
                me.data("dialog").triggerHandler("init", [{
                    "support_auth_8021x": !!info["support_auth_8021x"],
                    "supportSecurityPolicy": info["supportSecurityPolicy"]
                }]);
            })
            .on("__set.wifi_profile", function(e, _info, _api_info) {
                var me = $(this);
                var info = _info || { _order: [] };
                var api_info = _api_info || {};
                var tr_tmpl = me.data("tr_tmpl");
                var arr = $.map(info["_order"], function(id) {
                    var o = info[id];
                    var security_policy = __wifi_auth_map(o["security"]["policy"]["type"]);
                    var tr = tr_tmpl.clone();
                    tr.data({
                        "info": o,
                        "api_info": $.extend(api_info[id], { id: id })
                    })
                    .addClass("wifi_profile_" + id)
                    .toggleClass("tablecontent4", !o["enable"])
                    .find(".ssid").text(o["ssid"]).end()
                    .find(".security_text").text(security_policy["name"]).end()
                    .find(".security_icon").toggleClass("hide", !security_policy["secure"]).end()
                    return tr;
                });
                me.data("original_order", info["_order"]);
                me.data("order", info["_order"].slice());
                me.find(".wifi_sortable").empty().append(
                    arr
                )
            })
            .on("update_row.wifi_profile", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var tr_tmpl = me.data("tr_tmpl");
                var tr;
                var __get_free_num = function(l) {
                    var use_map = {}, i, i_max;
                    $.each(l, function(_, v) { use_map[+v] = true; });
                    for (i = 1, i_max = l.length + 1; i < i_max && use_map[i]; i++);
                    return i;
                };
                var security_policy = __wifi_auth_map(info["security"]["policy"]["type"]);
                var order = me.data("order");
                if ($.isEmptyObject(info)) {
                    return;
                }
                if (!info["id"]) {
                    info["id"] = __get_free_num(order);
                    order.push(info["id"]);
                    me.data("order", order);
                } else {
                    tr = me.find(".wifi_sortable tr.wifi_profile_" + info["id"]);
                }
                if (!tr) {
                    tr = tr_tmpl.clone();
                    tr
                    .addClass("wifi_profile_" + info["id"]);
                    me.find(".wifi_sortable").append(tr);
                }
                // TODO: make set and export use the same json format
                var temp_hack = $.extend(true, {}, info);
                temp_hack["conn"]["method"] = info["conn"]["method"]["type"];
                temp_hack["conn"][info["conn"]["method"]["type"]] = info["conn"]["method"]["detail"];
                temp_hack["dns"] = info["conn"]["dns"]
                tr
                .data("info", temp_hack)
                .data("api_info", info)
                .toggleClass("tablecontent4", !info["enable"])
                .find(".ssid").text(info["ssid"]).end()
                .find(".security_text").text(security_policy["name"]).end()
                .find(".security_icon").toggleClass("hide", !security_policy["secure"]).end()
            })
            .on("export.wifi_profile", function() {
                var me = $(this);
                var order = me.data("original_order");
                var list;
                if (me.is(":visible")) {
                    list = me.find(".wifi_sortable tr").map(function() {
                        var info = $(this).data("api_info");
                        if ($.inArray(info["id"], order) == -1) {
                            info["id"] = 0; // To pretend newly added profile
                        }
                        info["connection"] = info["conn"];
                        return info;
                    }).get();
                    if (!_e(list)) {
                        list = [];
                    }
                }
                return list;
            })
            .on("click", ".edit_action", function(e) {
                var info = $(this).closest("tr").data("info");
                $(e.delegateTarget).data("dialog")
                    .triggerHandler("open_dialog", [ info ]);
            })
            .on("click", ".add_action", function(e) {
                $(e.delegateTarget).data("dialog")
                    .triggerHandler("open_dialog");
            })
            .on("click", ".remove_action", function(e) {
                var me = $(e.delegateTarget);
                var tr = $(this).closest("tr");
                var order = me.data("order");
                var info = tr.data("info") || {};
                var idx = $.inArray(info["id"], order);
                if (idx != -1) {
                     order.splice(idx, 1);
                     tr.remove();
                }
            })
            return table;
        }
        // Common for all type of port
        var __create_status_panel = function(_param) {
            var param = _param || {};
            var panel = {
                conn_method: create_conn_network_status_panel(),
                engineering_data: __create_engineering_data_panel()
            }
            var vdsl_status_tmpl = $("<div/>").append(
                $("<span/>").addClass("fas fa-long-arrow-down fa-fw")
                    .attr("title", "download")
                    .css({ color: "darkgreen" }),
                $("<span/>").addClass("download"),
                $("<span/>").addClass("fas fa-long-arrow-up fa-fw")
                    .attr("title", "upload")
                    .css({ color: "mediumblue" }),
                $("<span/>").addClass("upload")
            );
            var table = $("<table/>");
    
            table
            .addClass("form_table sep conn_status")
            .data({
                "panel": panel,
                "callback": param["callback"]
            })
            .api_widget({
                func: "status.wan.connection",
                json_parser: function(json) {
                    var me = $(this);
                    var info = jsonGetObject(json, { "response>.o": [
                        "ip", "mask", "gateway", "mtu.d",
                        // [Bug#22649] Gateway Proxy Support
                        "gatewayUrl",
                        "uptime.d",
                        "method>conn_method",
                        "virtualType>virtual_port_type",
                        "modem>_modem.e", "cellular>_cellular.e",
                        "vdsl>_vdsl.e", "wifi>_wifi.e",
                        "openvpn>_openvpn.e", {
                        "dns.a": [ ">" ],
                        "additionalIp.a": [ ">" ]
                        }
                    ]});
                    var conn_id = me.data("conn_id");
                    var conn_info = info[conn_id] || {};
                    var cb = me.data("callback");
                    var sfc_str = getSFCStr({
                        transform_string: "fcrrqFhfvba pbaarpg LTE",
                        letter_style: "snakecase"
                    });
                    var sim_count;
                    var supportGatewayProxy = jsonGetObject(json, {
                        "response>": "supportGatewayProxy>.b"
                    });
                    if (!supportGatewayProxy) {
                        delete conn_info["gatewayUrl"];
                    }
                    Help["conn.status"] = Help["conn.status.pfx"];
                    switch (conn_info["virtual_port_type"]) {
                    case "modem":
                        $.extend(conn_info, jsonGetObject(conn_info["_modem"], [
                            "name>modem_name",
                            "esn>has_esn.b",
                            "esn",
                            "imsi>has_imsi.b",
                            "imsi",
                            "iccid>has_iccid.b",
                            "iccid",
                            "mtn>has_mtn.b",
                            "mtn",
                            "mobileType>has_data_bearer.b",
                            "mobileType>data_bearer",
                            "signalLevel>has_signal_level.b",
                            "signalLevel>signal_level.d", 
                            "username", "password", "apn", "dialNumber", {
                            "carrier>": [ "name>carrier_name", "country>carrier_country" ],
                            "band.a": [
                                "name", "signal>has_signal.b", {
                                "signal>": [ "rssi", "sinr", "snr", "rsrp", "rscp", "rsrq", "ecio" ]
                            }]
                        }]));
                        conn_info["sim_info"] = {
                            "1": {
                                "has_imsi": conn_info["has_imsi"],
                                "imsi": conn_info["imsi"],
                                "has_iccid": conn_info["has_iccid"],
                                "iccid": conn_info["iccid"],
                                "has_mtn": conn_info["has_mtn"],
                                "mtn": conn_info["mtn"]
                            },
                            "_order": [ 1 ]
                        }
                        me.triggerHandler("init", [{
                            sim_count: 1
                        }]);
                        break;
                    case "cellular":
                        $.extend(conn_info, jsonGetObject(conn_info["_cellular"], [
                            "carrierAggregation>is_carrier_aggregation.b",
                            "dataTechnology>data_tech",
                            "imei>has_imei.b",
                            "imei",
                            "eid",
                            "esn>has_esn.b",
                            "esn",
                            "modulePowerOn.b",
                            "networkMode>has_network_mode.b",
                            "networkMode>network_mode",
                            "remoteSim>hasRemoteSIMInfo.b",
                            "fusionSim>hasFusionSIMInfo.b",
                            sfc_str + ">has" + sfc_str.charAt(0).toUpperCase() + sfc_str.slice(1) + ".b", {
                            "meid>": [
                                "hex>has_meid_hex.b", "hex>meid_hex",
                                "dec>has_meid_dec.b", "dec>meid_dec"
                            ],
                            "carrier>": [ "name>carrier_name", "country>carrier_country" ],
                            "remoteSim>remoteSIMInfo": [
                                "imsi",
                                "serialNumber>sn",
                                "slot"
                            ],
                            "fusionSim>fusionSIMInfo": [
                                "imsi",
                                "serialNumber>sn",
                                "slot"
                            ],
                            [sfc_str]: [
                                "active.b",
                                "imsi",
                                "iccid",
                                "mtn"
                            ],
                            // [Bug#27556] eSIM info
                            "esim.o": [
                                "active.b",
                                "imsi",
                                "iccid",
                                "mtn"
                            ],
                            // [Bug#24777]
                            "rat.a": [
                                "name", {
                                "band.a": [
                                    "name",
                                    "channelWidth",
                                    "channel.d", "pci.d",
                                    "signal>has_signal.b", {
                                    "signal>": [
                                        "rssi",
                                        "sinr",
                                        "snr",
                                        "rsrp",
                                        "rscp",
                                        "rsrq",
                                        "ecio"
                                    ]
                                }]
                            }],
                            "sim>sim_info.o": [
                                "active.b",
                                "simCardDetected.b",
                                "imsi",
                                "iccid>has_iccid.b",
                                "iccid",
                                "mtn>has_mtn.b",
                                "mtn",
                                "username", "password", "apn", "autoApn>auto_apn.b"
                            ]}
                        ]));
                        sim_count = conn_info["sim_info"]["_order"].length;
                        Help["conn.status"] += Help["cellular.settings.engineeringData"];
                        me.triggerHandler("init", [{
                            sim_count: sim_count
                        }]);
                        break;
                    case "wifi":
                        $.extend(conn_info, jsonGetObject(conn_info["_wifi"], [
                            "ssid>wifi_profile_name", "bssid>wifi_ssid", {
                            "signal>": [
                                "strength>has_signal.b",
                                "strength>signal",
                                "level>has_signal_group.b",
                                "level>signal_group.d"
                            ]
                        }]))
                        break;
                    case "vdsl":
                        $.extend(conn_info, { vdsl: jsonGetObject(conn_info["_vdsl"], [
                            "power", "profile", {
                            "lineRate": [ "upload.d", "download.d" ],
                            "attainableRate": [ "upload.d", "download.d" ],
                            "attenuation": [ "upload", "download" ],
                            "snrMargin": [ "upload", "download" ],
                            "fecError": [ "upload.d", "download.d" ]
                        }])});
                        break;
                    case "openvpn":
                        $.extend(conn_info, jsonGetObject(conn_info["_openvpn"], [
                            "server>openvpn_server", { "uplink>": [ "name>openvpn_uplink_name" ] }
                        ]));
                        break;
                    }
                    me.data({
                        conn_id: conn_id,
                        port_type: conn_info["virtual_port_type"],
                        status: conn_info || {},
                        sim_count: sim_count,
                        cell_info: {
                            cell_id: conn_info["cell_id"],
                            cell_utran_id: conn_info["cell_utran_id"],
                            cell_plmn: conn_info["cell_plmn"],
                            cell_tac: conn_info["cell_tac"],
                            cell_lac: conn_info["cell_lac"]
                        }
                    });
                    me.triggerHandler("__set_status", [ conn_info || {} ]);
                    me.triggerHandler("redraw");
                    if (cb) {
                        if (conn_info["sim_info"]) {
                            $.each(conn_info["sim_info"]["_order"], function(_, sim_id) {
                                var o = conn_info["sim_info"][sim_id] || {};
                                if (o["active"] && o["auto_apn"]) {
                                    cb.triggerHandler("set_operator_status", [{
                                        sim_id: sim_id,
                                        username: o["username"],
                                        password: o["password"],
                                        apn: o["apn"],
                                        auto: o["auto_apn"]
                                    }]);
                                }
                            })
                            cb.triggerHandler("redraw");
                        }
                    }
                    return conn_info;
                }
            });
    
            table
            .append(
                $("<thead/>").append(
                    create_form_title("WAN Connection Status", "conn.status")
                ),
                $("<tbody/>").addClass("loading").append(
                    $("<tr/>").addClass("tablecontent2").append(
                        $("<td/>", { colspan: 99 }).append(
                            $("<div/>").addClass("loadIcon center")
                        )
                    )
                ),
                $("<tbody/>").addClass("openvpn hide").append(
                    create_form_row("OpenVPN Server").addClass("openvpn openvpn_server"),
                    create_form_row("OpenVPN Uplink").addClass("openvpn openvpn_uplink")
                ),
                $("<tbody/>").addClass("modem hide").append(
                    create_form_row("Wireless Adaptor").addClass("modem_name modem")
                ),
                $("<tbody/>").addClass("multi_col cellular modem hide").append(
                    create_form_row("", [
                        $("<div/>").append(
                            $("<div/>").addClass("multi_sim col_title")
                                .attr("data-multiCol", "1")
                        )
                    ]).addClass("tabletitle2").removeClass("tablecontent2"),
                    create_form_row("IMSI").addClass("imsi hide cellular modem"),
                    create_form_row("ICCID").addClass("iccid hide cellular modem"),
                    create_form_row("MTN").addClass("mtn hide cellular modem")
                ).attr("data-multiCol", "1"),
                // Cellular / Modem
                $("<tbody/>").addClass("cellular modem").append(
                    create_form_row("RemoteSIM").addClass("remote_sim_info hide cellular"),
                    create_form_row("FusionSIM").addClass("fusion_sim_info hide cellular"),
                    // [Bug#26716] SpeedFusion Connect => renamed SpeedFusion Connect LTE [Bug#27836]
                    create_form_row(getSFCStr("fcrrqFhfvba pbaarpg LTE")).addClass("speedfusionConnect_info hide cellular"),
                    // [Bug#27556] eSIM info
                    create_form_row("BYO eSIM A").addClass("esim_1 hide cellular"),
                    create_form_row("BYO eSIM B").addClass("esim_2 hide cellular"),
                    create_form_row("MEID").addClass("meid hide cellular"),
                    create_form_row("ESN").addClass("esn hide cellular modem"),
                    create_form_row("IMEI").addClass("imei hide cellular"),
                    create_form_row("EID").addClass("eid hide cellular"), // [Bug#31134]
                    create_form_row("Network Mode").addClass("network_mode hide cellular"),
                    create_form_row("Carrier").addClass("carrier_name hide cellular modem"),
                    create_form_row("Country/Region").addClass("carrier_country hide cellular modem"),
                    create_form_row("Network").addClass("data_tech hide cellular modem")
                    // create_form_row("Band").addClass("band_signal hide cellular"),
                    // create_form_row("Secondary Band").addClass("band_signal_alt hide cellular")
                ),
                $("<tbody/>").addClass("band_signal hide cellular modem"),
                panel["engineering_data"],
                // Wi-Fi
                $("<tbody/>").addClass("wifi hide").append(
                    create_form_row("Network Name (SSID)", [
                        $("<div/>").append(
                            $("<span/>").addClass("ssid").css({ "float": "left" }),
                            $("<button/>", { type: "button" }).addClass("icon wifi_ntw_action")
                                .text("Change").css({ "float": "right" })
                        )
                    ]).addClass("wifi"),
                    create_form_row("MAC Address (BSSID)", $("<span/>").addClass("bssid")).addClass("wifi")
                ),
                $("<tbody/>").addClass("wifi hide").append(
                    create_form_row("Signal Strength", $("<div/>").append(
                        $("<span/>").addClass("signal"),
                        $("<img/>").addClass("signal_img wifi hide").css({
                            height: "16px",
                            width: "16px",
                            "vertical-align": "top",
                            "padding-left": "5px"
                        })
                    )).addClass("wifi")
                ),
                $("<tbody/>").addClass("vdsl hide").append(
                    create_form_row("Power Level").addClass("vdsl_power"),
                    create_form_row("VDSL Profile").addClass("vdsl_profile"),
                    create_form_row("Line Rate", vdsl_status_tmpl.clone())
                        .addClass("lineRate"),
                    create_form_row("Attainable Rate", vdsl_status_tmpl.clone())
                        .addClass("attainableRate"),
                    create_form_row("Attenuation", vdsl_status_tmpl.clone())
                        .addClass("attenuation"),
                    create_form_row("SNR Margin", vdsl_status_tmpl.clone())
                        .addClass("snrMargin"),
                    create_form_row("FEC Errors", vdsl_status_tmpl.clone())
                        .addClass("fecError")
                ),
                panel["conn_method"]
            );
    
            table
            .addClass("ctrl")
            .on("show_cellular_engine_data_panel", function(e) {
                var	me = $(this), o;
    
                o = me.data("panel")["engineering_data"];
                if (_e(o)) {
                    o.triggerHandler("reload_engine_data_panel", [ true ]);
                }
            });
    
            table
            .on("__reset.conn_status", function() {
                var me = $(this);
                me.find("tbody:not(.loading) tr").toggleClass("hide", true).end()
                me.find(".loading tr").toggleClass("hide", false).end()
                me.removeData("conn_id");
            })
            .on("init.conn_status", function(e, _param) {
                var me = $(this);
                var param = _param || {};
                var sim_count = param["sim_count"] || 1;
                var trs = me.find(".multi_col tr:not(.tabletitle2)");
                var title_tr = me.find(".multi_col tr.tabletitle2");
                // Reset to single column
                trs.find("td:gt(1)").remove();
                title_tr.find("div.col_title").not(":first").remove();
                // Create the 2nd, 3rd... column on the fly
                trs.find("td:last").data("sim_id", 1)
                    .attr("data-multiCol", 1);
                title_tr.toggleClass("hide", sim_count <= 1)
                    .find("div.col_title").text("SIM Card A")
                    .attr("data-multiCol", 1);
                if (sim_count > 1) {
                    $.each(new Array(sim_count - 1), function(i) {
                        var td = trs.find("td:last").clone();
                        var sim_id = i + 2;
                        var sfx = "_" + sim_id;
                        title_tr.find("td").last().find("div").first().append(
                            title_tr.find("div.col_title").clone()
                            .text("SIM Card " + String.fromCharCode(64 + sim_id))
                            .attr("data-multiCol", sim_id)
                        );
                        trs.each(function(j) {
                            $(td[j])
                            .data("sim_id", sim_id)
                            .attr("data-multiCol", sim_id);
                            $(this).append(td[j]);
                        })
                    });
                    /*me.find("div.multi_sim").each(function(i) {
                        $(this).text(
                            "SIM Card " + String.fromCharCode(65 + i)
                        )//.attr("data-multiCol", sim_id);
                    })*/
                }
                // Change thead colspan according to SIM Count
                me.find("thead tr")
                    .find("td:last").attr("colspan", sim_count + 1);
                me.find(".multi_col tr.tabletitle2")
                    .find("td:last").attr("colspan", sim_count + 1);
                // Change tbody colspan according to SIM Count
                me.find("tbody:not(.multi_col, .loading) tr")
                    .find("td:last").attr("colspan", sim_count);
                // Set with for multiple columns td
                me.find(".multi_col tr").find("td:gt(0)").css({
                    width: (70 / sim_count) + "%"
                })
                // Toggle UI according to SIM Count
                me.find(".multi_sim").toggleClass("hide", sim_count <= 1);
            })
            .on("reload.conn_status", function(e, conn_id) {
                var me = $(this);
                me
                .data("conn_id", conn_id)
                return me.triggerHandler("api_reload", [{ id: conn_id }, { method: "GET" }]);
            })
            .on("__set_status.conn_status", function(e, _info) {
                var me = $(this);
                var panel = me.data("panel");
                var port_type = me.data("port_type");
                var info = _info || {};
                var rat = info["rat"] || [];
                var sim_count = me.data("sim_count");
                var vdsl = info["vdsl"] || {};
                var sfc_str = getSFCStr({
                    transform_string: "fcrrqFhfvba pbaarpg LTE",
                    letter_style: "snakecase"
                });
                var	o;
    
                if (!_e(rat)) {
                    rat = [{ band: info["band"] || [] }];
                }
    
                me
                .find(".openvpn_server td").eq(1).text(info["openvpn_server"]).end().end()
                .find(".openvpn_uplink td").eq(1)
                .text(info["openvpn_uplink_name"])
                .textOverflow({ width: 300 }).end().end()
                .find(".modem_name td:eq(1)").text(info["modem_name"]).end()
                .find(".remote_sim_info td:eq(1)").empty().append(
                    info["hasRemoteSIMInfo"] ? $.map({
                        "imsi": "IMSI",
                        "sn": "Serial Number",
                        "slot": "Slot"
                    }, function(s, id) {
                        return _e(info["remoteSIMInfo"][id]) ?
                            s + ": " +
                        info["remoteSIMInfo"][id] : null;
                    }).join("<br/>") : ""
                );
    
                // [Bug#29728] Fusion SIM info support
                me
                .find(".fusion_sim_info td:eq(1)").empty().append(
                    info["hasFusionSIMInfo"] ? $.map({
                        "imsi": "IMSI",
                        "sn": "Serial Number",
                        "slot": "Slot"
                    }, function(s, id) {
                        return _e(info["fusionSIMInfo"][id]) ?
                            s + ": " +
                        info["fusionSIMInfo"][id] : null;
                    }).join("<br/>") : ""
                );
    
                // [Bug#26716] SpeedFusion Connect => renamed SpeedFusion Connect LTE [Bug#27836]
                o = me.find(".speedfusionConnect_info td:eq(1)").empty();
                if (info["has" + sfc_str.charAt(0).toUpperCase() + sfc_str.slice(1)]) {
                    v = $.map([
                        "imsi", "iccid", "mtn"
                    ], function(id, i) {
                        var	v = info[sfc_str][id];
    
                        return _e(v) ?
                            [[ id.toUpperCase() + ":", v ]] : null;
                    });
                    if (info[sfc_str]["active"]) {
                        if (!_e(v)) {
                            v.push([]);
                        }
                        v[0].push("(In Use)");
                    }
                    o.append($.map(v, function(v) {
                        return $("<div/>").text(v.join(" "));
                    }));
                }
    
                // [Bug#27556] eSIM info
                $.each([ 1, 2 ], function(_, id) {
                    o = me.find(".esim_" + id + " td:eq(1)").empty();
                    if (info["esim"] && $.inArray(id,
                        info["esim"]["order"] || []) != -1) {
                        var	obj = info["esim"][id] || {};
    
                        v = $.map([
                            "imsi",
                            "iccid",
                            "mtn"
                        ], (s, i) => _e(obj[s]) ? [[
                            s.toUpperCase() + ":",
                            obj[s]
                        ]] : null);
    
                        if (obj["active"]) {
                            if (!_e(v)) {
                                v.push([]);
                            }
                            v[0].push("(In Use)");
                        }
                        o.append($.map(v, (v) =>
                            $("<div/>").text(v.join(" "))));
                    }
                });
    
                me
                .find(".meid td:eq(1)").empty().append(
                    _e(info["meid_hex"]) ? $("<div/>").text("HEX: " + info["meid_hex"]) : "",
                    _e(info["meid_dec"]) ? $("<div/>").text("DEC: " + info["meid_dec"]) : ""
                ).end()
                .find(".esn td:eq(1)").text(info["esn"]).end()
                .find(".imei td:eq(1)").text(info["imei"]).end()
                .find(".eid td:eq(1)").text(info["eid"]).end()
                .find(".network_mode td:eq(1)").text(info["network_mode"]).end()
                .find(".carrier_name td:eq(1)").text(info["carrier_name"]).end()
                .find(".carrier_country td:eq(1)").text(info["carrier_country"]).end()
                .find(".data_tech td:eq(1)").text(info["data_tech"]).end()
                .find(".band_signal").empty().append(
    
                    $.map(rat, function(o, i) {
                        var	pfx = _e(o["name"]) ? o["name"] : null;
    
                        return $.map(o["band"] || [], function(o, i) {
                            var	title = [ "Band" ];
    
                            if (i > 0) {
                                title.unshift("Secondary ");
                                title.push("(SSC" + i + ")");
                            }
                            if (pfx) {
                                title.unshift(pfx);
                            }
    
                            return create_form_row(title.join(" "), [
                                $("<div/>").text(o["name"]),
                                get_signal_strength_display(o, " "),
                                (o["channel"] || o["pci"]) ? $("<div/>").addClass("engineering_data hide").append(
                                    o["channel"] ? $("<span/>").addClass("engineering_data hide")
                                        .text("Channel: " + o["channel"])
                                        .css({ "padding-right": "10px" }) : "",
                                    o["pci"] ? $("<span/>").addClass("engineering_data hide").text("PCI: " + o["pci"]) : ""
                                ) : "",
                                _e(o["channelWidth"]) ?
                                $("<div/>").addClass("engineering_data hide").text("Bandwidth: " +
                                    o["channelWidth"]) : ""
                            ]).find("td:last")
                                .attr("colspan", sim_count)
                            .end()
                        });
                    })
                ).end()
                // wifi specific
                .find(".ssid").text(info["wifi_profile_name"]).end()
                .find(".bssid").text(info["wifi_bssid"]).end()
                .find(".signal").empty().append(
                    get_signal_strength_display(info, " ").css({ display: "inline-block" })
                ).end()
                .find(".signal_img")
                .attr("src", "../../en/images/" + (
                    checkIntFormat(info["signal_group"], { min: 0, max: 5 }) ?
                        ("signal5-" + info["signal_group"]) : "1ptrans"
                    ) + ".gif"
                ).end()
                if (info["sim_info"] && _e(info["sim_info"]["_order"])) {
                    var placeholder = port_type == "modem" ? "" : "-";
                    $.each(info["sim_info"]["_order"], function(_, sim_id) {
                        var o = info["sim_info"][sim_id];
                        var imsi = _e(o["imsi"]) ? o["imsi"] : "";
                        if (!_e(imsi) && info["modulePowerOn"]) {
                            imsi += o["simCardDetected"] ? "(SIM Card Detected)" : "(No SIM Card Detected)";
                        }
                        if (o["active"]) {
                            imsi += " (In Use)";
                        }
                        me
                        .find(".imsi td")
                            .filter(function() {
                                return $(this).data("sim_id") == sim_id;
                            }).text(_e(imsi) ? imsi : placeholder).end()
                        .end()
                        .find(".iccid td")
                            .filter(function() {
                                return $(this).data("sim_id") == sim_id;
                            }).text(_e(o["iccid"]) ? o["iccid"] : placeholder).end()
                        .end()
                        .find(".mtn td")
                            .filter(function() {
                                return $(this).data("sim_id") == sim_id;
                            }).text(_e(o["mtn"]) ? o["mtn"] : placeholder).end()
                        .end()
                    })
                }
                if (!$.isEmptyObject(vdsl)) {
                    me.find(".vdsl_power td").eq(1).text(vdsl["power"]).end().end()
                    .find(".vdsl_profile td").eq(1).text(vdsl["profile"]).end().end()
                    $.each([ "lineRate", "attainableRate",
                        "attenuation", "snrMargin", "fecError"], function(_, cls) {
                        var o = vdsl[cls];
                        var upload = o["upload"];
                        var download = o["download"];
                        switch (cls) {
                        case "lineRate":
                        case "attainableRate":
                            upload = +upload > 0 ? auto_unit(upload, "kbps") : "-";
                            download = +download > 0 ? auto_unit(download, "kbps") : "-";
                            break;
                        case "attenuation":
                        case "snrMargin":
                            upload = +upload > 0 ? (upload + " dB") : "-";
                            download = +download > 0 ? (download + " dB") : "-";
                            break;
                        default:
                            break;
                        }
                        me.find("." + cls)
                            .find(".upload").text(upload).end()
                            .find(".download").text(download).end()
                    })
                }
                if (panel["conn_method"]) {
                    panel["conn_method"].triggerHandler("__set", [{
                        uptime: info["uptime"],
                        network: {
                            ipaddr: info["ip"],
                            netmask: +info["mask"] ? netmask_ntoa(info["mask"]) : "",
                            gateway: info["gateway"],
                            // [Bug#22649] Gateway Proxy Support
                            gatewayUrl: info["gatewayUrl"],
                            dns: info["dns"],
                            additionalIp: info["additionalIp"],
                            mtu: info["mtu"]
                        },
                        conn_method: info["conn_method"],
                        virtual_port_type: info["virtual_port_type"]
                    }])
                }
                // TODO: Move to reload .done function
                if (panel["engineering_data"]) {
                    panel["engineering_data"].triggerHandler("init", [{
                        conn_id: me.data("conn_id"),
                        sim_count: me.data("sim_count")
                    }]);
                }
            })
            .on("redraw.conn_status", function() {
                var me = $(this);
                var panel = me.data("panel");
                var o = panel["conn_method"];
                var port_type = me.data("port_type");
                me.find(".loading").toggleClass("hide", true).end()
                if (port_type == "gobi") {
                    port_type = "cellular";
                }
                me.find(".ethernet, .modem, .cellular, .wifi, .adsl, .vdsl, .gre, .openvpn")
                    .toggleClass("hide", true)
                    .filter(function() {
                        return $(this).hasClass(port_type);
                    }).toggleClass("hide", false).end()
                .end()
                .find("tr." + port_type).find("td:gt(0)").each(function() {
                    var td = $(this);
                    td.closest("tr").toggleClass("hide", !_e(td.text()))
                });
                // Special Handling on wifi, if no wifi profile is connected, hide wifi status
                me.toggleClass("hide",
                    (port_type == "wifi" && !_e(me.find(".ssid").text())) ||
                    !me.find("tr:not(.tabletitle)").not(".hide").length
                );
            })
            .on("x_reload_engine_data_panel.conn_status", function(e, is_reload) {
                var me = $(this);
                var cell_info = me.data("cell_info");
                me.data("is_reload_engine_info", is_reload);
                if (!is_reload)
                {
                    me.find(".engineering_data").empty().toggleClass("hide", true);
                    return;
                }
                else
                {
                    $.ajax("data.cgi", {
                        type: "POST",
                        data: {
                            option: "gobi_util",
                            gobi_action: "engine_info",
                            conn_id: me.data("conn_id")
                        },
                        context: {
                            me: me,
                            cell_info: cell_info
                        }
                    }).done(function(xml) {
                        var me = this["me"];
                        var info = xmlGetObject(xml, { "gobi_engine_info>": [
                            "manufacturer", "model", "firmware", "hw_rev",
                            "voice_num", "msid", "prl_version", "hsid", "hnid",
                            "accolc", "profile_idx", "profile_state", "home_addr",
                            "home_agent.a", "reverse_tunneling", "nai", "haspi",
                            "aaaspi", "hass", "aaass", "sci", "scm", "hsid_state",
                            "fsid_state", "fnid_state", {
                                "roaming": [ "preference", "state" ]
                            },
                            "rtt_rssi", "evdo_rssi", "data_bearer", "band_class",
                            "dormancy_status",
                            "carrier_aggregation>is_carrier_aggregation.b", {
                            "channel.o": ">"
                        }]});
                        var cell_info = this["cell_info"];
                        var sim_count = me.data("sim_count");
                        info["cell_plmn"] = cell_info["cell_plmn"];
                        info["cell_tac"] = cell_info["cell_tac"];
                        info["cell_lac"] = cell_info["cell_lac"];
                        info["cell_id"] = cell_info["cell_id"];
                        info["cell_utran_id"] = cell_info["cell_utran_id"];
                        me.find(".engineering_data").empty().append(
                            create_form_row("Manufacturer", info["manufacturer"]),
                            create_form_row("Model", info["model"]),
                            create_form_row("Firmware", info["firmware"]),
                            create_form_row("Hardware Revision", info["hw_rev"]),
                            create_form_row("Voice Number", info["voice_num"]),
                            create_form_row("MSID", info["msid"]),
                            create_form_row("PLMN", info["cell_plmn"]),
                            create_form_row("TAC", info["cell_tac"]),
                            create_form_row("LAC", info["cell_lac"]),
                            create_form_row("Cell ID", info["cell_id"]),
                            create_form_row("UTRAN Cell ID", info["cell_utran_id"]),
                            create_form_row("PRL Version", info["prl_version"]),
                            create_form_row("Home System Identification", info["hsid"]),
                            create_form_row("Home Network Identification", info["hnid"]),
                            create_form_row("Access Overload Class", info["accolc"]),
                            create_form_row("Profile", info["profile_idx"]),
                            create_form_row("Profile State", info["profile_state"]),
                            create_form_row("Home Address", info["home_addr"]),
                            create_form_row("Primary Home Agent", info["home_agent"][0]),
                            create_form_row("Secondary Home Agent", info["home_agent"][1]),
                            create_form_row("Reverse Tunneling", info["reverse_tunneling"]),
                            create_form_row("Network Access Identifier", info["nai"]),
                            create_form_row("MN-HA SPI", info["haspi"]),
                            create_form_row("MN-AAA SPI", info["aaaspi"]),
                            create_form_row("MN-HA SS", info["hass"]),
                            create_form_row("MN-AAA SS", info["aaass"]),
                            create_form_row("Slot Cycle Index", info["sci"]),
                            create_form_row("Station Class Mark", info["scm"]),
                            create_form_row("Home System Registration", info["hsid_state"]),
                            create_form_row("Foreign System Identification Registration", info["fsid_state"]),
                            create_form_row("Foreign Network Identification Registration", info["fnid_state"]),
                            create_form_row("Roaming Preference", info["roaming"]["preference"]),
                            create_form_row("Roaming", info["roaming"]["state"]),
                            create_form_row("1xRTT RSSI", (_e(info["rtt_rssi"])? [info["rtt_rssi"], "dBm"].join(" "): "")),
                            create_form_row("EV-DO RSSI", (_e(info["evdo_rssi"])? [info["evdo_rssi"], "dBm"].join(" "): "")),
                            create_form_row("Data Bearer", info["data_bearer"]),
                            create_form_row("Band Class	", info["band_class"]),
                            $.map(info["channel"]["_order"], function(id) {
                                var ch = info["channel"][id];
                                if (id == "1") {
                                    return create_form_row("Channel Number", ch);
                                } else if (info["is_carrier_aggregation"]) {
                                    return create_form_row("Secondary Channel Number (SSC" + (id - 1) + ")", ch);
                                } else {
                                    return null;
                                }
                            }),
                            create_form_row("Dormancy Status", info["dormancy_status"])
                        ).find("tr").hide()
                            .find("td:eq(1)").each(function() {
                                var td = $(this);
                                td.toggleClass("has_info", !!_e(td.text())).attr("colspan", sim_count);
                            }).end()
                        .end()
                        .find("td.has_info").closest("tr").show().end().end()
                        .toggleClass("hide", false);
                    }).always(function() {
                        $.wait(5000, this).done(function() {
                            var me = this["me"];
                            var is_reload = me.data("is_reload_engine_info");
                            me.triggerHandler("reload_engine_info", [ is_reload, this["cell_info"] ]);
                        });
                    });
                }
            })
            .on("click", ".wifi_ntw_action", function(e) {
                var me = $(e.delegateTarget)
                var conn_id = me.data("conn_id");
                var dlg = $(".conn_dialog");
                if (dlg) {
                    dlg = dlg.data("wifi_network_dialog");
                    if (dlg) {
                        dlg.triggerHandler("open_dialog", [ conn_id ]);
                    }
                }
                $.tips(false);
            })
            .on("click", ".multi_col div.col_title", function(e) {
                $(e.delegateTarget).find("tbody.multi_col").attr("data-multiCol",
                    $(this).closest("div").attr("data-multiCol")
                );
            })
            return table;
        }
        var __create_conn_name_row = function() {
            return create_form_row(
                "WAN Connection Name",
                $("<input/>", { name: "conn_name" }).attr("size", 40)
            ).addClass("conn_name")
            .on("__set.conn_name", function(e, curr_val, def_val) {
                var	me = $(this);
                me
                .find("[name=conn_name]")
                .attr("placeholder", def_val)
                .val(curr_val).end()
            })
            .on("validate.conn_name", function() {
                var me = $(this);
                var o = me.find("[name=conn_name]");
                o.val(trim(o.val()));
                if (isempty(o.val())) {
                    o.val(o.attr("placeholder"));
                }
                if (!_e(o.val())) {
                    return err("WAN Connection Name cannot be empty", o);
                }
                if (!checkSafeFormat(o.val())) {
                    return err("Invalid WAN Connection Name", o);
                }
                return true;
            })
        }
        var __create_conn_priority_panel = function() {
            var tbody = $("<tbody/>").addClass("priority_panel").append(
                create_form_row("Connection Priority",
                    $.merge(create_radio_input("priority", {
                        "primary": { text: "Always-on (Priority 1)", __class: "priority_action" },
                        "backup": { text: "Backup", __class: "priority_action" }
                    }, "primary"), [ $("<select/>", { name: "backup_group" }) ])
                ),
                create_form_row("Independent from Backup WANs",
                    $("<input/>", { type: "checkbox", name: "group_set" }).val("yes"),
                    "conn.groupSet"
                ).addClass(window.support_unoactive ? "hide " : "")
            )
            .on("init.priority_panel", function(e, port_count) {
                var me = $(this);
                if (window.support_max) {
                    port_count = 3;
                }
                me.find("[name=backup_group]").empty().append(
                    $.map(new Array(port_count || 1), function(_, i) {
                        var priority = i + 2;
                        return $("<option/>").val(priority).text(
                            "Priority " + priority + (
                                priority == port_count + 1 ? " (Lowest)" : ""
                            )
                        );
                    })
                );
            })
            .on("__reset.priority_panel", function(e, _info) {
                var me = $(this);
                me.find("[name=priority]")
                    .filter("[value=primary]").prop("checked", true).end()
                .end()
                .find("[name=backup_group] option:first").prop("selected", true).end()
                .find("[name=group_set]").prop("checked", false).end();
            })
            .on("__set.priority_panel", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                me.find("[name=priority]")
                    .filter("[value=\"" +(
                        info["priority"] == 1 ? "primary" : "backup"
                    ) + "\"]").prop("checked", true).end()
                .end()
                .find("[name=group_set]")
                    .prop("checked",
                        info["priority"] == 1 && info["group_set"] == 1
                    )
                .end()
                if (info["priority"] > 1) {
                    me.find("[name=backup_group]")
                        .find("[value=\"" + info["priority"] + "\"]")
                            .prop("selected", true)
                        .end()
                    .end()
                }
            })
            .on("redraw.priority_panel", function(e, _info) {
                var me = $(this);
                var always_on = me.find("[name=priority]:checked").val() == "primary";
                var show_group_set = always_on ||
                    me.find("[name=priority]").closest("tr").hasClass("hide");
                me.find("[name=backup_group]").toggleClass("hide", always_on);
                me.find("[name=group_set]").closest("tr").toggleClass("hide", !show_group_set);
            })
            .on("validate.priority_panel", function() {
                var me = $(this);
                // Nothing to check
                return true;
            })
            .on("export.priority_panel", function() {
                var me = $(this);
                var res = {};
                var o;
                res["priority"] = me.find("[name=priority]:checked").val() == "primary" ? 1 :
                    +me.find("[name=backup_group] option:selected").val();
                // Independent from Backup WANs
                o = me.find("[name=group_set]");
                if (o.is(":visible")) {
                    res["groupSet"] = o.is(":checked") ? 1 : 0;
                }
                return res;
            })
            .on("change keyup", ".priority_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw");
            })
            .on("click", ".priority_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw");
            })
            return tbody;
        }
        var __create_bam_panel = function() {
            var div = $("<div/>").addClass("bam_panel");
            return div.append(
                    __create_multi_col_flex_row("Bandwidth Allowance Monitor",
                        create_checkbox({
                            bam_enable: {
                                value: "yes",
                                text: "Enable"
                            }
                        }),
                        "bam.enable"
                    ).find("[name=bam_enable]").addClass("bam_action").end(),
                    __create_multi_col_flex_row("Action",
                        $("<div/>").append(
                            create_hidden_input("bam_allowance_quota"),
                            $("<div/>").addClass("bam_hassmtp_panel hide")
                            .text("\
    You will receive email notification when usage hits 75%/95% of monthly \
    allowance.\
    "),
                            $("<div/>").addClass("bam_nonsmtp_panel hide")
                            .append("\
    Email notification is currently disabled. You can get notified when usage \
    hits 75%/95% of monthly allowance by enabling \
    ",
                                $("<a/>", { href: "#" })
                                .addClass("enable_smtp")
                                .text("Email Notification"),
                                "."
                            ),
                            create_checkbox({
                                bam_action_restrict: {
                                    value: "yes",
                                    text: "Reserve for management traffic when usage hits 100% of monthly allowance"
                                }
                            }, {
                                delimiter: "<br/>"
                            }),
                            create_checkbox({
                                bam_action_disconnect: {
                                    value: "yes",
                                    text: "Disconnect when usage hits 100% of monthly allowance",
                                    __class: "check_action"
                                }
                            }, {
                                delimiter: "<br/>"
                            })
                        ), "bam.action"
                    ).addClass("bam_details_panel hide"),
                    __create_multi_col_flex_row("Start Day", [
                        "On ",
                        $("<select/>", { name: "bam_start_day" }).append(
                            $.map(new Array(29), function(_, i) {
                                var	idx = i + 1,
                                    day_str,
                                    day_val = idx;
                                switch (idx) {
                                case 1: case 21:
                                    day_str = idx + "st";
                                    break;
                                case 2: case 22:
                                    day_str = idx + "nd";
                                    break;
                                case 3: case 23:
                                    day_str = idx + "rd";
                                    break;
                                default:
                                    day_str = idx + "th";
                                    break;
                                }
                                if (idx == 29) {
                                    day_val = 0;
                                    day_str = "Last day";
                                }
                                return $("<option/>").val(day_val).text(day_str);
                            })
                        ),
                        " of each month at 00:00 midnight"
                    ], "bam.start").addClass("bam_details_panel hide"),
                    __create_multi_col_flex_row("Monthly Allowance", [
                        $("<input/>", {
                            name: "bam_allowance_value",
                            maxlength: "5"
                        }).attr("size", "6"),
                        $("<select/>", { name: "bam_allowance_unit" }).append(
                            $.map([ "TB", "GB", "MB" ], function(v) {
                                return $("<option/>").val(v)
                                .text(v.toUpperCase());
                            })
                        )
                    ], "bam.quota").addClass("bam_details_panel hide")
            )
            .on("init.bam_panel", function(e) {
                var me = $(this);
                me.find("[name^=bam_enable]").prop("checked", false).end()
                .find("[name^=bam_action_restrict]").prop("checked", false).end()
                .find("[name^=bam_action_disconnect]").prop("checked", true).end()
                .find("[name^=bam_start_day]")
                    .find("option:first").prop("selected", true).end()
                .end()
                .find("[name^=bam_allowance_value]").val("").end()
                .find("[name^=bam_allowance_unit]")
                    .find("[value=GB]").prop("selected", true).end()
                .end();
            })
            .on("redraw.bam_panel", function() {
                var me = $(this);
                var show_details = false;
                var has_smtp = me.data("has_smtp");
                // Twisted for Dual SIM UI
                me.find("[name^=bam_enable]").each(function() {
                    var o = $(this);
                    var is_enable = o.is(":checked");
                    var td = o.closest(".flex_td");
                    var sim_id;
                    sim_id = td.data("sim_id");
                    // me.find("tr.bam_details_panel").find("td:eq(" + idx + ")")
                    me.find(".bam_details_panel").find(".flex_td").filter(function() {
                        return $(this).data("sim_id") == sim_id;
                    }).find("input, select").prop("disabled", !is_enable);
                    if (is_enable) {
                        show_details = true;
                    }
                });
                me.find(".bam_details_panel").toggleClass("hide", !show_details);
    
                // [Bug#21788] Special UI hide/show display according to request
                me.find("[name=bam_action_disconnect]").each(function() {
                    var	me = $(this),
                        is_disconnect = me.is(":checked"),
                        o;
                    o = me.closest(".flex_td").find("[name=bam_action_restrict]")
                    .closest("label");
                    o.toggleClass("hide", !!is_disconnect);
                });
    
                me.find(".bam_hassmtp_panel")
                    .toggleClass("hide", !has_smtp)
                .end()
                .find(".bam_nonsmtp_panel")
                    .toggleClass("hide", has_smtp)
                .end();
            })
            .on("__set.bam_panel", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var quota = auto_unit(info["quota"]["value"], info["quota"]["unit"],
                    { mode: "integer" }).split(" ");
                var tds = me.find(".flex_row").find(".flex_td").filter(function() {
                    return $(this).data("sim_id") == info["sim_id"];
                });
                me
                .data("has_smtp", info["hasSmtp"]);
                tds.find("[name=bam_enable]")
                    .prop("checked", info["enable"])
                .end();
                if (info["enable"]) {
                    tds
                    .find("[name=bam_action_restrict]")
                        .prop("checked", $.inArray("restrict", info["action"]) != -1)
                    .end()
                    .find("[name=bam_action_disconnect]")
                        .prop("checked", $.inArray("disconnect", info["action"]) != -1)
                    .end()
                    .find("[name=bam_start_day]")
                        .val(info["start"])
                    .end()
                    .find("[name=bam_allowance_value]")
                        .val(quota[0])
                    .end()
                    .find("[name=bam_allowance_unit]")
                        .find("[value=\"" + quota[1] + "\"]")
                            .prop("selected", true)
                        .end()
                    .end()
                }
            })
            .on("validate.bam_panel", function() {
                var	me = $(this),
                    r = { min: 1, max: 99999 },
                    is_valid = true;
                me.find("[name^=bam_enable]:checked").each(function() {
                    var sim_id = $(this).closest(".flex_td").data("sim_id");
                    var panel = me.find(".flex_row").find(".flex_td").filter(function() {
                        return $(this).data("sim_id") == sim_id;
                    });
                    var o, v;
                    o = panel.find("[name^=bam_allowance_value]");
                    o.val(trim(o.val()));
                    v = o.val();
                    if (!checkIntFormat(v, r)) {
                        is_valid = false;
                        return err("Monthly Allowance must be between " +
                            r["min"] + " and " + r["max"], o);
                    }
                    switch (panel.find("[name=bam_allowance_unit]").val()) {
                    case "TB":
                        v = +v * 1024 * 1024;
                        break;
                    case "GB":
                        v = +v * 1024;
                        break;
                    case "MB":
                    default:
                        break;
                    }
                    panel.find("[name=bam_allowance_quota]").val(v);
                });
                return is_valid;
            })
            .on("export.bam_panel", function(e, sim_id) {
                var me = $(this);
                var panel = me.find(".flex_row").find(".flex_td").filter(function() {
                    return $(this).data("sim_id") == sim_id;
                });
                var res, o;
                var action = [];
                if (me.is(":visible")) {
                    o = panel.find("[name^=bam_enable]");
                    res = {
                        enable: o.is(":checked")
                    };
                    if (res["enable"]) {
                        action.push("email");
                        if (panel.find("[name^=bam_action_disconnect]").is(":checked")) {
                            action.push("disconnect");
                        }
                        if (panel.find("[name^=bam_action_restrict]").is(":checked")) {
                            action.push("restrict");
                        }
                        $.extend(res, {
                            action: action,
                            start: +panel.find("[name^=bam_start_day] option:selected").val(),
                            monthlyAllowance: {
                                value: +panel.find("[name^=bam_allowance_value]").val(),
                                unit: panel.find("[name^=bam_allowance_unit] option:selected").val()
                            }
                        });
                    }
                }
                return res;
            })
            .on("click.bam_panel", ".check_action", function(e) {
                var	me = $(e.delegateTarget);
                me.triggerHandler("redraw");
            })
            .on("click.bam_panel", ".bam_action", function(e) {
                var	me = $(e.delegateTarget),
                    panel = me.find(".bam_details_panel"),
                    is_checked = $(this).prop("checked"),
                    msg = is_checked ? "\
    Due to different network protocol overheads and conversions, the \
    amount of data as reported by this device is not representative of \
    actual billable data usage as metered by your network provider. \
    " + window.comname + " \
    disclaims any obligation or responsibility for any events arising out of \
    the use of the numbers shown here.\
    " : "",
                    dfd = _e(msg) ? alert_dialog(msg, "OK", {
                        title: "Disclaimer",
                        width: "400px"
                    }).data("dfd") : $.Deferred().resolve();
    
                dfd.always(function() {
                    this[0].triggerHandler("redraw");
                }.bind([ me ]));
            })
            .on("click.bam_panel", ".enable_smtp", function(e) {
                goto_page("utnotify");
                return false;
            });
        }
    // {{{	Physical Settings - MTU MSS
        var __create_mtumss_panel = function(tbody) {
            if (!tbody) {
                tbody = $("<tbody/>")
            }
            if (!tbody.hasClass("mtumss_panel")) {
                tbody.addClass("mtumss_panel");
            }
            tbody
            .append(
                create_form_row("MTU", $("<div/>").addClass("mtu").append(
                    $("<span/>").addClass("mode_panel ethernet wifi gre openvpn wovlan").append(
                        create_radio_input("mtu_mode", [{
                            text: "Auto",
                            value: "auto"
                        }, {
                            text: "Custom",
                            value: "custom"
                        }], { className: "mtu_action" })
                    ),
                    $("<div/>").addClass("value_panel").append(
                        // $("<span/>").text("Value:").css({ "margin": "0 3px" }),
                        $("<span/>").addClass("mtu_auto_value hide"),
                        $("<input/>", { name: "mtu_value", maxlength: "4" })
                            .addClass("custom ethernet wifi gre modem cellular")
                            .attr("size", 5)
                    ).css({ display: "inline-block" })
                ), "phy.mtu").addClass("mtu ethernet wifi gre modem cellular openvpn wovlan"),
                create_form_row("MSS", $("<div/>").addClass("mss").append(
                    create_radio_input("mss_mode", [{
                        text: "Auto",
                        value: "auto"
                    }, {
                        text: "Custom",
                        value: "custom"
                    }], { className: "mss_action" }),
                    $("<div/>").addClass("value_panel").append(
                        $("<input/>", { name: "mss_value", maxlength: "4" }).attr("size", 5)
                    ).css({ display: "inline-block" })
                ), "phy.mss").addClass("mss ethernet wovlan"),
                // [Bug#21304] Enforced TTL, for Modem / Cellular port
                create_form_row("Enforced TTL", $("<input/>", {
                    name: "ttl",
                    placeholder: "Auto",
                    maxlength: "3"
                }).attr("size", "5")).addClass("ttl modem cellular")
            )
            .on("redraw.mtumss_panel", function(e) {
                var me = $(this);
                var port_type = me.data("port_type");
                var mtu_auto = me.find("[name=mtu_mode]:checked").val() == "auto";
                var mss_auto = mtu_auto ||
                    me.find("[name=mss_mode]:checked").val() == "auto";
                var mtu_auto, mss_auto, o;
                Help["phy.mtu"] = Help["phy.mtu_default"];
                if (port_type == "ethernet" && window.support_jumboframe) {
                    Help["phy.mtu"] += Help["phy.mtu_jumboframe"];
                }
                // Only Ethernet WAN supports MSS settings
                // Only Ethernet, GRE Outlet, and Wifi WAN support Mode selection
                o = me.find("[name=mtu_mode]:visible:checked");
                if (o.length) {
                    mtu_auto = o.val() == "auto";
                }
                o = me.find("[name=mss_mode]:visible:checked");
                if (o.length) {
                    mss_auto = mtu_auto || o.val() == "auto";
                }
                me
                .find(".mtu_auto_value").toggleClass("hide", !mtu_auto).end()
                .find("[name=mtu_value]")
                    .prop("disabled", mtu_auto)
                    .toggleClass("hide", mtu_auto)
                .end()
                .find("[name=mss_mode]")
                    .filter("[value=custom]").prop("disabled", mtu_auto).end()
                .end()
                .find("[name=mss_value]")
                    .prop("disabled", mss_auto)
                    .toggleClass("hide", mss_auto)
                .end();
                if (mtu_auto) {
                    me.find("[name=mss_mode]")
                        .filter("[value=auto]").prop("checked", true);
                }
            })
            .on("__set.mtumss_panel", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var port_type = info["port"]["type"];
                var phy = info["phy"];
                var mtu_def_val = {
                    ethernet: 1440,
                    //modem: 1492,	// [Bug#5792]
                    modem: 1428,	// [Bug#18927]
                    cellular: 1428,
                    gobi: 1428,
                    wifi: 1500
                };
                var def = mtu_def_val[port_type] || 1440;
                me.data("port_type", port_type);
                $.each([ "mtu", "mss" ] , function(_, str) {
                    var v = phy[str] || "";
                    me.find("[name=" + str + "_value]").val(v).end()
                    .find("[name=" + str + "_mode]")
                        .filter("[value=" + (v > 0 ? "custom" : "auto") +"]")
                            .prop("checked", true)
                        .end()
                    .end();
                    // Auto Detected value (Suppose is only for MTU, as there is no info for MSS)
                    /*
                    v = o["auto_value"];
                    o = me.find("." + str + "_auto_value");
                    if (o.length) {
                        o.text(_e(v) ? v : "-");
                    }
                    */
                });
                me.find("[name=ttl]").val(phy["ttl"]);
    
                me.find("[name=mtu_value]").attr("placeholder", def);
                me.find("[name=mss_value]").attr("placeholder", def - 40);
                me.find(".mtu .mtu_default_action")
                .data("def_val",
                    mtu_def_val[port_type] || 1440
                );
            })
            .on("validate.mtumss_panel", function(e, conn_method) {
                var me = $(this);
                var o, v, r;
                var mtu_r = {
                    min: 576,
                    max: 1500
                };
                var jf_r = {
                    min: 1501,
                    max: 9000
                }
                var __err_msg = function(type, r) {
                    return [
                        type,
                        "must be between",
                        r["min"], "and",
                        r["max"]
                    ].join(" ");
                };
                var is_jf;
                if (!me.is(":visible")) {
                    return true;
                }
                if (me.find("[name=mtu_mode]:checked").val() == "custom") {
                    o = me.find("[name=mtu_value]");
                    o.val(trim(o.val()));
                    v = o.val();
                    switch (conn_method) {
                    case "pppoe":
                        mtu_r["max"] = 1492;
                        break;
                    case "gre":
                        mtu_r["max"] = 1476;
                        break;
                    // [Bug#15308] Jumbo Frame only support for ethernet's static and dhcp conn_method
                    case "staticIp":
                    case "dhcp":
                        mtu_r["max"] = window.support_jumboframe &&
                            me.data("port_type") == "ethernet" ?
                            jf_r["max"] : mtu_r["max"];
                        break;
                    case "l2tp":
                    default:
                        break;
                    }
                    if (!checkIntFormat(v, mtu_r)) {
                        return err(__err_msg("MTU", mtu_r), o, me.find("div.mtu"));
                    }
                    o = me.find("[name=mss_value]");
                    if (o.is(":visible") && me.find("[name=mss_mode]:checked").val() == "custom") {
                        o.val(trim(o.val()));
                        r = {
                            min: mtu_r["min"] - 40,
                            max: Math.min(v, mtu_r["max"]) - 40
                        };
                        if (!checkIntFormat(o.val(), r)) {
                            return err(__err_msg("MSS", r), o, me.find("div.mss"));
                        }
                    }
                }
                // [Bug#21304] Enforced TTL, for Modem / Cellular port
                o = me.find("[name=ttl]");
                o.val(trim(o.val()));
                r = { min: 1, max: 255 };
                if (o.is(":visible") &&
                    !(isempty(o.val()) ||
                    checkIntFormat(o.val(), r))) {
                    return err(__err_msg("TTL", r), o);
                }
                return true;
            })
            .on("export.mtumss", function() {
                var me = $(this);
                var res = {}, o;
                $.each([ "mtu", "mss" ], function(_, key) {
                    var o = me.find("[name^=" + key + "]:visible");
                    if (o.length) {
                        res[key] = o.filter("[name$=" + "_mode]:visible:checked").val() == "auto" ?
                            null : +o.filter("[name$=" + "_value]:visible").val();
                    }
                });
                // [Bug#21304] Enforced TTL, for Modem / Cellular port
                o = me.find("[name=ttl]:visible");
                if (o.length) {
                    res["ttl"] = _e(o.val()) ? +o.val() : null;
                }
                return $.isEmptyObject(res) ? null : res;
            })
            .on("click", ".mtu_default_action", function(e) {
                var target = $(this);
                var name = target.data("name");
                var v = target.data("def_val");
                target.closest("tr").find("[name=" + name + "]").val(v);
            })
            .on("click", ".mtu_action, .mss_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw");
            })
            return tbody;
        }
        // Physical Settings - ADSL, VDSL - VPI and VCI
        var __create_vpivci_panel = function(tbody) {
            if (!tbody) {
                tbody = $("<tbody/>")
            }
            if (!tbody.hasClass("vpivci_panel")) {
                tbody.addClass("vpivci_panel");
            }
            tbody.append(
                create_form_row("VPI", [
                    $("<input/>", { name: "vpi_value", maxlength: "3", placeholder: "8" })
                    .css({
                        width: "70px"
                    })
                ]),
                create_form_row("VCI", [
                    $("<input/>", { name: "vci_value", maxlength: "5", placeholder: "35" })
                    .css({
                        width: "70px"
                    })
                ])
            )
            .on("__reset.vpivci_panel", function() {
                var me = $(this);
                var o = me.find("[name=vpi_value]");
                o.val(o.attr("placeholder"));
                o = me.find("[name=vci_value]");
                o.val(o.attr("placeholder"));
            })
            .on("__set.vpivci_panel", function(e, info) {
                var me = $(this);
                me.find("[name=vpi_value]").val(
                    info["vpi"]
                ).end()
                me.find("[name=vci_value]").val(
                    info["vci"]
                ).end()
            })
            .on("validate.vpivci_panel", function() {
                var me = $(this);
                var __err = function(title, r, o) {
                    return err(title + " must be between " +
                        r["min"] + " and " + r["max"], o);
                }
                var o, r;
                if (!me.is(":visible")) {
                    return true;
                }
                r = { min: 0, max: 255 };
                o = me.find("[name=vpi_value]");
                o.val(trim(o.val()));
                if (_e(o.val())) {
                    if (!checkIntFormat(o.val(), r)) {
                        return __err("VPI", r, o);
                    }
                } else {
                    o.val(o.attr("placeholder"));
                }
                r = { min: 32, max: 65535 };
                o = me.find("[name=vci_value]");
                o.val(trim(o.val()));
                if (_e(o.val())) {
                    if (!checkIntFormat(o.val(), r)) {
                        return __err("VCI", r, o);
                    }
                } else {
                    o.val(o.attr("placeholder"));
                }
                return true;
            })
            .on("export.vpivci_panel", function() {
                var me = $(this);
                var o = me.find("[name=vpi_value]");
                var res = {};
                if (me.is(":visible")) {
                    if (_e(o.val())) {
                        res["vpi"] = +o.val();
                    }
                    o = me.find("[name=vci_value]");
                    if (_e(o.val())) {
                        res["vci"] = +o.val();
                    }
                }
                return $.isEmptyObject(res) ? undefined : res;
            })
            .on("click.vpivci_panel", ".default_action", function(e) {
                var o = $(this).closest("td").find("[name$=_value]");
                o.val(o.data("def_val"));
            })
            return tbody;
        }
        // Physical Settings - GRE - GRE Uplink
        var __create_greuplink_panel = function(tbody) {
            if (!tbody) {
                tbody = $("<tbody/>")
            }
            if (!tbody.hasClass("greuplink_panel")) {
                tbody.addClass("greuplink_panel");
            }
            tbody.append(
                create_form_row("Uplink Interface", [
                    $("<select/>", { name: "gre_uplink" })
                ])
            )
            .on("__set.greuplink_panel", function(e, _obj) {
                var	me = $(this),
                    obj = _obj || {},
                    o;
    
                o = me.find("[name=gre_uplink]");
                o.find("[value=\"" + obj["greuplink"] + "\"],:first")
                .last().prop("selected", true);
            })
            .on("set_greuplink_option", function(e, _info) {
                var	me = $(this),
                    info = _info || {},
                    arr = $.map(info["_order"] || [], function(id) {
                        var	o = info[id] || {},
                            name = o["name"] || ("WAN " + id);
                        switch (o["virtual_port_type"]) {
                        case "ethernet":
                        case "cellular":
                        case "modem":
                        case "wifi":
                            return $("<option/>").val(id).text(name);
                            break;
                        default:
                            return null;
                            break;
                        }
                    }),
                    o = me.find("[name=gre_uplink]");
                o.empty().append(arr);
            })
            .on("export.greuplink_panel", function() {
                var me = $(this);
                return me.is(":visible") ? {
                    greUplink: +me.find("[name=gre_uplink] option:selected").val()
                } : undefined;
            })
            return tbody;
        }
        var __create_openvpn_uplink_priority_panel = function() {
            var tbody = $("<tbody/>").append(
                create_form_row("Uplink Connection Priority", [
                    $("<table/>").addClass("form_table openvpn_uplink_priority").append(
                        $("<thead/>").append(
                            $("<tr/>").addClass("tabletitle").append(
                                $("<td/>").text("Priority"),
                                $("<td/>").text("WAN Selection")
                            )
                        ),
                        $("<tbody/>").addClass("multirow").append(
                            $("<tr/>").addClass("tablecontent2 multirow_select_row").append(
                                $("<td/>").append($("<span/>").addClass("multirow_select_id").append("1")),
                                $("<td/>").append($("<select/>", { name: "conn_priority" }).addClass("multirow_select_select").css({ width: "450px" }))
                            )
                        )
                    ),
                    $("<div/>").append(
                        create_checkbox({
                            failback_on_recovery: {
                                value: "yes",
                                text: "Failback on Connection Recovery"
                            }
                        })
                    )
                ], "phy.openvpn_uplink")
            );
            tbody
            .on("init.openvpn_uplink_priority", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var conn_info = info["conn"] || { _order: [] };
                // As multirow_select will call $.empty(),
                // the option list must be prepared before create_multirow_select
                me.find("[name=conn_priority]").empty().append(
                    create_option_array($.map(conn_info["_order"], function(id) {
                        var o = conn_info[id] || {};
                        return id == info["id"] ? null : [[ id, o["name"] ]];
                    }))
                );
                me.data("multirow_select",
                    create_multirow_select({
                        target: me.find("tbody.multirow"),
                        min_select: 1
                    })
                );
            })
            .on("__reset.openvpn_uplink_priority", function(e, _info) {
                var me = $(this);
                var o = me.data("multirow_select");
                if (o) {
                    o.off();
                }
                me.find("[name=failback_on_recovery]").prop("checked", false);
            })
            .on("__set.openvpn_uplink_priority", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var uplink = info["uplink"] || { _order: [] };
                var order = uplink["_order"].sort(function(a, b) {
                    return (uplink[a] || {})["priority"] -
                        (uplink[b] || {})["priority"];
                });
                me.data("multirow_select").triggerHandler("preset", [ order ]);
                me.find("[name=failback_on_recovery]").prop("checked", info["failback"]);
            })
            .on("export.openvpn_uplink_priority", function() {
                var me = $(this);
                var ret = {};
                var pri = me.find(".multirow_select_row").map(function() {
                    var tr = $(this);
                    var conn_id = +tr.find("[name=conn_priority] option:selected").val();
                    if (conn_id) {
                        return {
                            priority: +tr.find(".multirow_select_id").text(),
                            id: conn_id
                        };
                    }
                }).get();
                if (_e(pri)) {
                    ret["uplink"] = pri;
                }
                ret["failback"] = me.find("[name=failback_on_recovery]").is(":checked");
                return ret;
            })
    
            return tbody;
        }
        var __create_wovlan_uplink_panel = function(tbody) {
            if (!tbody) {
                tbody = $("<tbody/>")
            }
            if (!tbody.hasClass("wovlan_uplink_panel")) {
                tbody.addClass("wovlan_uplink_panel");
            }
            tbody.append(
                create_form_row("Uplink Interface", [
                    $("<select/>", { name: "wovlan_uplink" })
                        .addClass("check_action")
                        .css({ "max-width": "450px" })
                ]),
                create_form_row("VLAN",
                    $("<input/>", { name: "wovlan_vlan_id", maxlength: "4" }).attr("size", 15)
                )
            )
            .on("__reset.wovlan_uplink_panel", function() {
                var me = $(this);
                me.find("[name=wovlan_uplink] option:first").prop("selected", true).end()
                .find("[name=wovlan_vlan_id]").val("").end();
            })
            .on("__set.wovlan_uplink_panel", function(e, _obj) {
                var	me = $(this),
                    obj = _obj || {},
                    wovlan = obj["hasWovlan"] ? obj["wovlan"] : {},
                    r = getValidateRangeObj({ type: "vlan_id" }),
                    o;
                o = me.find("[name=wovlan_uplink]");
                o.find("[value=\"" + wovlan["uplink"] + "\"],:first")
                .last().prop("selected", true);
                o = me.find("[name=wovlan_vlan_id]");
                o.val(checkIntFormat(wovlan["vlanId"], r) ?
                    wovlan["vlanId"] : "");
            })
            .on("init.wovlan_uplink_panel", function(e, _info) {
                var	me = $(this),
                    info = _info || {},
                    arr = $.map(info["conn"]["_order"] || [], function(id) {
                        var	o = info["conn"][id] || {},
                            name = o["name"] || ("WAN " + id);
                        switch (o["virtual_port_type"]) {
                        case "ethernet":
                            return $("<option/>").val(id).text(name);
                            break;
                        default:
                            return null;
                            break;
                        }
                    }),
                    o = me.find("[name=wovlan_uplink]");
                arr.unshift($("<option/>").val("").text("Not Configured"));
                arr.push($("<option/>").val("wolan").text("LAN"));
                o.empty().append(arr);
            })
            .on("redraw.wovlan_uplink_panel", function(e) {
                var me = $(this);
                var conn_enable = me.closest(".conn_dialog").find("[name=conn_enable]").is(":checked");
                var o = me.find("[name=wovlan_uplink]");
                var v;
                o.find("[value=\"\"]").toggleOption(!conn_enable);
                v = o.find("option:selected").val();
                o = me.find("[name=wovlan_vlan_id]");
                o.prop("disabled", !_e(v));
                if (!_e(v)) {
                    o.val("");
                }
            })
            .on("validate.wovlan_uplink_panel", function() {
                var me = $(this);
                var conn_enable = me.closest(".conn_dialog").find("[name=conn_enable]").is(":checked");
                if (me.is(":visible") &&
                    _e(me.find("[name=wovlan_uplink] option:selected").val())) {
                    var o = me.find("[name=wovlan_vlan_id]");
                    var r = getValidateRangeObj({ type: "vlan_id" });
                    o.val(trim(o.val()));
                    if (conn_enable && !_e(o.val())) {
                        return err("VLAN ID must be between " +
                            r["min"] + " and " + r["max"], o);
                    }
                }
                return true;
            })
            .on("export.wovlan_uplink_panel", function() {
                var me = $(this);
                var v = me.find("[name=wovlan_uplink] option:selected").val();
                return me.is(":visible") ? (_e(v) ? {
                    uplink: checkInteger(v) ? +v : v,
                    vlanId: +me.find("[name=wovlan_vlan_id]").val()
                } : null) : undefined;
            })
            .on("change keyup", ".check_action", function(e) {
                $(e.delegateTarget).triggerHandler("redraw");
            })
            return tbody;
        }
        // Subnet Database
        var __create_subnet_database_table = function() {
            // [Bug#16919] [Bug#16920]
            var table = $("<table/>").addClass("form_table sep subnet_database").append(
                create_form_title("Subnet Database for Location Aware Routing"),
                create_form_row("Subnet Database", [
                    $("<div/>").css({
                        display: "inline-block",
                        width: "400px",
                        "vertical-align": "bottom"
                    }).append(
                        $("<form/>", {
                            action: "api_upload.cgi"
                        }).addClass("subnet_database_upload_form")
                        .append(
                            create_hidden_input("func", "cmd.subnetDatabase"),
                            create_hidden_input("action", "upload"),
                            create_hidden_input("instantActive", "yes"),
                            create_hidden_input("connId", "0"),
                            $("<input/>", {
                                type: "file",
                                name: "upfile"
                            }).css({
                                "box-sizing": "border-box",
                                border: "solid 1px black",
                                padding: "2px",
                                width: "100%"
                            })
                        ),
                        $("<div/>").css({
                            "text-align": "center"
                        }).append(
                            $("<button/>", {
                                type: "button",
                                title: "Upload"
                            }).addClass("icon downarrowIcon fas subnet_database_upload_action")
                        ),
                        $("<span/>").addClass("subnet_database_info")
                    ),
                    $("<span/>").addClass("subnet_database_ctrl").append(
                        $("<button/>", {
                            type: "button",
                            title: "Remove"
                        }).addClass("icon trashIcon fas subnet_database_remove_action")
                    )
                ], "subnetDatabase")
            );
    
            table
            .api_widget({
                func: "cmd.subnetDatabase",
                json_parser: function(json) {
                    return jsonGetObject(json, { "response>": [
                        "connId.d",
                        "configured.b",
                        "size.d",
                        "timestamp.d",
                        "datetime"
                    ]});
                }
            })
            .on("reload", function() {
                var	me = $(this),
                    conn_id = me.data("connId"),
                    data = {
                        connId: conn_id
                    };
    
                me.triggerHandler("api_reload", [
                    data,
                    {
                        "method": "GET"
                    }
                ]);
    
            })
            .on("redraw", function() {
                var	me = $(this),
                    info = me.data("info");
    
                me.find(".subnet_database_upload_form")
                .find("[name=connId]").val(info["connId"]);
    
                o = me.find(".subnet_database_info");
                v = info["configured"] ?
                    "Installed" +
                    (_e(info["datetime"]) ? " at " +
                    info["datetime"] : "") :
                    "(Database not available)";
                o.text(v)
    
                v = info["configured"] ? $("<a/>", {
                    "href": "#",
                    "title": "Download"
                }).css({
                    "text-decoration": "none",
                    "color": "navy"
                }) : $("<span/>").css({
                    "color": "lightGray"
                })
                v.addClass("fas fa-globe subnet_database_download_action");
                v.css({
                    "display": "inline-block",
                    "margin": "0 10px",
                    "font-size": "48px"
                })
                o.prepend(v);
    
                o = me.find(".subnet_database_ctrl");
                o.find("button").prop("disabled", !info["configured"]);
    
                me.triggerHandler("check_upfile");
            })
            .on("form_upload_action", function(e) {
                var	me = $(this),
                    info = me.data("info"),
                    o, dfd;
    
                err();
    
                o = me.find("[name=upfile]");
                if (!_e(o.val())) {
                    return err("Upload file is missing", o);
                }
    
                dfd = info["configured"] ?
                    confirm_dialog("Upload file will overwritte the existing subnet database information. Are you sure you want to proceed?")
                    .data("dfd") : $.Deferred().resolve().promise();
    
                dfd.done(function() {
                    var	me = $(this),
                        form = me.find(".subnet_database_upload_form");
    
                    form.ajax_upload_form({
                        context: this
                    })
                    .then(api_cgi_filter)
                    .done(function(json) {
                        var	me = $(this),
                            opt = me.data("__api_widget") || {},
                            f = opt["json_parser"],
                            info = typeof(f) == "function" ?
                            f.bind(this)(json) : json;
                        me.data("info", info);
                        me.triggerHandler("redraw");
                    })
                }.bind(this));
            })
            .on("remove_action", function(e) {
                confirm_dialog("Subnet database information will be removed. Are you sure you want to proceed?")
                .data("dfd")
                .done(function() {
                    var	me = $(this),
                        info = me.data("info"),
                        conn_id = info["connId"];
    
                    if (!(conn_id > 0)) {
                        return;
                    }
    
                    me.triggerHandler("api_reload", [{
                        connId: conn_id,
                        action: "remove"
                    }]);
                }.bind(this));
            })
            .on("check_upfile", function(e) {
                var	me = $(this), o;
    
                o = me.find("[name=upfile]");
                me.find(".subnet_database_upload_action")
                .prop("disabled", false && !_e(o.val()));
            })
            .on("change", "[name=upfile]", function(e) {
                $(e.delegateTarget).triggerHandler("check_upfile");
            })
            .on("click", ".subnet_database_upload_action", function(e) {
                $(e.delegateTarget)
                .triggerHandler("form_upload_action");
                return false;
            })
            .on("click", ".subnet_database_download_action", function(e) {
                var	me = $(e.delegateTarget),
                    info = me.data("info");
    
                if (info["configured"] && info["connId"]) {
                    window.location =
                        "download_subnet.cgi?conn_id=" +
                        info["connId"];
                }
                return false;
            })
            .on("click", ".subnet_database_remove_action", function(e) {
                $(e.delegateTarget)
                .triggerHandler("remove_action");
                return false;
            });
    
            return table;
        }
    // }}}
        var __create_signal_threshold_table = function() {
            var get_signal_err_msg = function(_o) {
                // WARNING: Invalid _o will garbage out!
                var	o = _o || {},
                    r = o["range"] || {};
                return [
                    o["title"] || "Value",
                    "must be between",
                    r["min"],
                    "and",
                    r["max"]
                ].join(" ");
            },
            get_signal_form_div = function(sfx, headless) {
                // WARNING: Invalid _o will garbage out!
                var	o = signal_info[sfx] || {},
                    r = o["range"] || {},
                    l = Math.max(r["min"].toString().length,
                        r["max"].toString().length);
                    arr = [ $("<input/>", {
                        name: "signal_threshold_" + sfx,
                        placeholder: o["placeholder"] || "",
                        maxlength: l
                    }).attr("size", l + 1) ];
                if (!headless && _e(o["title"])) {
                    arr.unshift($("<span/>")
                    .text(o["title"] + ": "));
                }
                if (_e(o["unit"])) {
                    arr.push($("<span/>")
                    .addClass("unit").text(o["unit"]));
                }
                return $("<div/>").append(arr).css({
                    "min-width": "200px",
                    "display": "inline-block"
                })
            };
    
            var table = $("<table/>").addClass("form_table sep signal_threshold_panel ui_cap SIGNAL_THRESHOLD").append(
                $("<thead/>").append(
                    create_form_title("Signal Threshold Settings", "signal_threshold")
                ),
                $("<tbody/>").addClass("bar").append(
                    create_form_row(signal_info["bar"]["title"],
                        $("<div/>").css({
                            "width": "250px"
                        }).append(
                            get_signal_form_div("bar", true).hide()
                        )
                        .append(
                            $("<div/>").css({
                                "text-align": "center"
                            }).addClass("sig_ref").append(
                                $.map(new Array(6), function(_, i) {
                                    return $("<img/>", {
                                        "src": "../../en/images/signal5-" + i + ".gif"
                                    }).css({
                                        "margin": "0 10px"
                                    })
                                })
                            ),
                            $("<div/>").css({
                                "margin": "10px"
                            }).slider({
                                min: 0,
                                max: 5,
                                value: 0,
                                change: function(e, ui) {
                                    $(this).triggerHandler("slider_action", [ ui.value ]);
                                },
                                slide: function(e, ui) {
                                    $(this).triggerHandler("slider_action", [ ui.value ]);
                                }
                            }).addClass("bar_slider")
                            .on("slider_action", function(e, v) {
                                var	td = $(this).closest("td"),
                                    img = td.find("img");
                                img.each(function(i) {
                                    if (i < v) {
                                        $(this).css({ opacity: 0.1 });
                                    } else {
                                        $(this).css({ opacity: 1 });
                                    }
                                });
                                td.find("[name=signal_threshold_bar]").val(v);
                            })
                        )
                    )
                ),
                $("<tbody/>").addClass("adv lte hide").append(
                    create_form_row("LTE", [
                        get_signal_form_div("rsrp"),
                        get_signal_form_div("rsrp", true)
                        .prepend("(Recovery: ").append(")"),
                        $("<br/>"),
                        get_signal_form_div("sinr"),
                        get_signal_form_div("sinr", true)
                        .prepend("(Recovery: ").append(")")
                    ])
                ),
                $("<tbody/>").addClass("adv 3g 3g_2g hide").append(
                    create_form_row($("<span/>").append(
                        $("<span/>").addClass("adv 3g").text("3G"),
                        $("<span/>").addClass("adv 3g_2g").text("/2G")
                    ), [
                        get_signal_form_div("rssi"),
                        get_signal_form_div("rssi", true)
                        .prepend("(Recovery: ").append(")")
                    ])
                ),
                $("<tbody/>").addClass("adv wifi_rssi hide").append(
                    create_form_row($("<span/>").append(
                        $("<span/>").addClass("adv wifi_rssi").text("Signal Strength")
                    ), [
                        get_signal_form_div("wifi_rssi"),
                        get_signal_form_div("wifi_rssi", true)
                        .prepend("(Recovery: ").append(")")
                    ])
                )
            )
            .find(".unit").css({ "margin-left": "3px" }).end();
    
    
            table
            .addClass("ctrl")
            .on("toggle_signal_threshold_adv_table", function(e, should_show) {
                $(this)
                .data("show_adv", !!should_show)
                .triggerHandler("redraw");
            })
            .on("show_signal_threshold_adv_table", function(e) {
                $(this).triggerHandler(
                    "toggle_signal_threshold_adv_table", [
                    true
                ]);
            })
            .on("hide_signal_threshold_adv_table", function(e) {
                $(this).triggerHandler(
                    "toggle_signal_threshold_adv_table", [
                    false
                ]);
            });
    
            table
            .on("get_cap.signal_threshold_panel", function(e, mode) {
                var     me = $(this),
                    ui_cap = me.data("ui_cap") || {};
    
                return ui_cap[mode] || ui_cap["default"] || [];
            })
            .on("__set_adv_feature.signal_threshold_panel", function(e, ui_cap_info) {
                var	me = $(this);
                    list = $.map([
                        "SIGNAL_THRESHOLD_WIFI_RSSI",
                        "SIGNAL_THRESHOLD_LTE",
                        "SIGNAL_THRESHOLD_3G",
                        "SIGNAL_THRESHOLD_3G_2G",
                    ], function(s) {
                        return $.inArray(s, ui_cap_info) != -1 ?
                            s.replace("SIGNAL_THRESHOLD_", "")
                            .toLowerCase() : null;
                    });
                me.data("support_adv_feature", list);
            })
            .on("init.signal_threshold_panel", function(e, _param) {
                var me = $(this);
                var param = _param || {};
                me.data({
                    ui_cap: param["ui_cap"]
                });
            })
            .on("__reset.signal_threshold_panel", function(e) {
                var me = $(this);
                me.find("[name^=signal_threshold]").val("");
                me.find(".bar_slider").slider("value", 0);
            })
            .on("toggle_ui_cap.signal_threshold_panel", function(e, _network_mode) {
                var me = $(this);
                var network_mode = _network_mode === undefined ?
                    me.data("network_mode") : _network_mode;
                var cap = me.triggerHandler("get_cap", [ network_mode ]);
    
                me.toggleClass("hide", $.inArray("SIGNAL_THRESHOLD", cap) == -1);
                me.triggerHandler("__set_adv_feature", [ cap ]);
            })
            .on("__set.signal_threshold_panel", function(e, _info) {
                var	me = $(this),
                    info = _info || {},
                    show_adv;
                me.data({
                    network_mode: info["network_mode"]
                });
                $.each(signal_info, function(s) {
                    var	o = me.find(
                        "[name=signal_threshold_" + s + "]"),
                        arr = Array.isArray(info[s]) ? info[s] : [ info[s] ];
                    o.each(function(i) {
                        var	v = arr[i];
                        var r = signal_info[s]["range"];
                        if (s != "bar" && r["min"] <= v && v <= r["max"]) {
                            $(this).val(v);
                            show_adv = true;
                        }
                        if (s == "bar" && i == 0) {
                            $(this).val(v);
                            me.find(".bar_slider").slider("value", +v || 0);
                        }
                    });
                });
                me.data("show_adv", !!show_adv);
            })
            .on("redraw.signal_threshold_panel", function(e) {
                var	me = $(this),
                    // [ "lte", "3g", "3g_2g" ]
                    support_adv_feature =
                        me.data("support_adv_feature") || [],
                    show_adv = me.data("show_adv"),
                    base_obj = me.find(".bar"),
                    adv_obj = me.find(".adv"),
                    active_adv_obj = _e(support_adv_feature) ?
                        adv_obj.filter(
                        "." + support_adv_feature.join(", .")) :
                        $();
                    has_adv_obj = active_adv_obj.length;
                base_obj.toggleClass("hide", show_adv)
                .find("input").prop("disabled", !!show_adv);
                adv_obj.not(active_adv_obj).toggleClass("hide", true)
                .find("input").prop("disabled", true);
                active_adv_obj.toggleClass("hide", !show_adv)
                .find("input").prop("disabled", !show_adv);
                Help["signal_threshold"] =
                    Help["signal_threshold.pfx"] +
                    (has_adv_obj ? (!!show_adv ?
                    Help["signal_threshold.hide_adv"] :
                    Help["signal_threshold.show_adv"]) :
                    "");
            })
            .on("validate.signal_threshold_panel", function(e) {
                var	me = $(this),
                    is_valid = true;
                if (!me.is(":visible")) {
                    // Skip over (and reset) hidden panel
                    me.find("[name^=signal_threshold_]").val("");
                    return true;
                }
                $.each(signal_info, function(k, info) {
                    var	r = info["range"],
                        prev = undefined;
                    me.find("[name=signal_threshold_" + k + "]")
                    .not(":disabled").each(function(i) {
                        var	o = $(this);
                        o.val(trim(o.val()));
                        if (_e(o.val())) {
                            if (!(r["min"] <= o.val() && o.val() <= r["max"])) {
                                is_valid = false;
                                return err(get_signal_err_msg(info), o, o.parent());
                            }
                        } else {
                            o.val("");
                        }
                        if (i && !isempty(o.val())) {
                            // TODO: Error message are to be refined.
                            if (isempty(prev)) {
                                is_valid = false;
                                return err("You cannot configure this without base value", o, o.parent());
                            }
                            if (+o.val() < +prev) {
                                is_valid = false;
                                return err("Invalid value, which cannot be smaller than base value", o, o.parent());
                            }
                        }
                        prev = o.val();
                    });
                });
                return is_valid;
            })
            .on("export.signal_threshold", function() {
                var me = $(this);
                var res, o;
                if (me.is(":visible")) {
                    res = {};
                    o = me.find(".bar_slider");
                    if (o.is(":visible")) {
                        res["signalLevel"] = [ o.slider("value") ];
                    } else {
                        $.each([ "rsrp", "sinr", "rssi", "wifi_rssi" ], function(_, signal_type) {
                            o = me.find("[name=signal_threshold_" +
                                signal_type + "]:visible");
                            if (o.length) {
                                var arr = o.map(function() {
                                    var v = $(this).val();
                                    return _e(v) ? +v : null;
                                }).get();
                                res[signal_type.replace("wifi_", "")] = _e(arr) ? arr : null;
                            }
                        });
                    }
                }
                return res;
            })
            return table;
        }
    //	}}}
    //	{{{ Connection Dialog
        var __create_conn_dialog = function(_param) {
            var param = _param || {};
            var div = $("<div/>").addClass("conn_dialog new");
            var __create_bandwidth_selector = function(_name) {
                return $("<select/>", { "name": _name }).append(
                    $("<option/>").val("Gbps").text("Gbps"),
                    $("<option/>").val("Mbps").text("Mbps"),
                    $("<option/>").val("kbps").text("kbps")
                ).css({ "margin-left": "5px" });
            }
            var panel = {
                conn_method: create_conn_method(),
                conn_name: __create_conn_name_row(),
                conn_priority: __create_conn_priority_panel(),
                conn_cellular: __create_conn_cellular_settings(),
                modem_settings: __create_modem_settings_table(),
                cellular_settings: __create_cellular_settings_table(),
                wifi_settings: __create_wifi_settings_table(),
                signal_threshold: __create_signal_threshold_table(),
                mtumss: __create_mtumss_panel(),
                vpivci: __create_vpivci_panel(),
                greuplink: __create_greuplink_panel(),
                openvpn_uplink_priority: __create_openvpn_uplink_priority_panel(),
                wovlan_uplink: __create_wovlan_uplink_panel(),
                hc: create_healthcheck_panel(),
                bam: __create_bam_panel(),
                subnet_database: window.support_subnet_database ?
                    __create_subnet_database_table() : null,
                multiip: create_multiip_panel(),
                ddns: create_ddns_panel(),
                wifi_profile: __create_wifi_profile_table()
            };
            panel["conn_cellular"].data("panel", {
                cellular_settings: panel["cellular_settings"],
                signal_threshold: panel["signal_threshold"]
            });
            if (param["show_status"]) {
                panel["status"] = __create_status_panel({ callback: div });
            }
            if (typeof create_wifi_network_dialog === "function") {
                div.data({
                    wifi_network_dialog: create_wifi_network_dialog(
                        div, param["wwanPoller"]
                    )
                });
            }
            div
            .data({
                "callback": param["callback"],
                "wwanPoller": param["wwanPoller"],
                "panel": panel
            })
            .dialog($.extend(std_dialog_param(), {
                title: "WAN Connection Settings",
                close: function() {
                    var me = $(this);
                    var wwanPoller = me.data("wwanPoller");
                    var callback = me.data("callback");
                    var panel = me.data("panel");
                    if (wwanPoller) {
                        wwanPoller.setPaused(false);
                    }
                    // As the ".data" object will be removed,
                    // the option_hide can never be retrieve again
                    me.find("select").children().toggleOption(true);
                    nd(); err();
                    if (callback) {
                        callback.triggerHandler("reload");
                    }
                    if (panel["status"]) {
                        panel = panel["status"].data("panel") || {};
                        if (panel["engineering_data"]) {
                            panel["engineering_data"].triggerHandler("__reset");
                        }
                    }
                },
                buttons: [{
                    text: "Save and Apply",
                    click: function() {
                        var me = $(this);
    
                        if (me.triggerHandler("validate")) {
                            var info = me.triggerHandler("export", [ false ]);
    
                            if (info === false) {
                                return;
                            }
                            me.triggerHandler("warning", [ info ])
                            .done(function() {
                                this[0].triggerHandler("save", [ this[1] ]);
                            }.bind([ me, info ]))
                        }
                    },
                }, {
                    text: "Cancel",
                    click: function() {
                        $(this).dialog("close");
                    }
                }]
            }))
            .append(
                // $("<div/>").addClass("loading hide loadIcon center"),
                $("<div/>").addClass("center greyText no_info")
                    .text("No Information").css({
                        "text-align": "center"
                    }),
                create_loading_div().addClass("loading"),
                $("<div/>").addClass("content").append(
                    $("<input/>", { "type": "password" }).addClass(".fake_password").prop("readonly", true).hide(),
                    create_hidden_input("conn_id"),
                    $("<div/>").addClass("status").append(
                        panel["status"] ? panel["status"] : ""
                    ),
                    $("<div/>").addClass("settings").append(
                        $("<table/>").addClass("form_table sep conn_table").append(
                            $("<thead/>").append(
                                create_form_title("WAN Connection Settings", "wan_settings")
                                    .find(".helpIcon").addClass("wan_settings hide").end()
                            ),
                            panel["conn_name"],
                            $("<tbody/>").addClass("schedule_panel").append(
                                create_form_row("Enable",
                                    $("<input/>", {
                                        type: "checkbox", name: "conn_enable"
                                    }).addClass("enable_action")
                                ).addClass("enable_row")
                            ),
                            panel["conn_priority"],
                            panel["conn_cellular"].addClass("cellular"),
                            panel["conn_method"],
                            // [Bug#19520] Default Route from BGP (on MAX)
                            $("<tbody/>").addClass("bgp_gateway_panel hide").append(
                                create_form_row("Default Route from BGP",
                                    create_checkbox({
                                        "route_from_bgp": {
                                            "value": "yes"
                                        }
                                    }), "conn.routeFromBgp")
                            ),
                            $("<tbody/>").addClass("standby_state_panel").append(
                                create_form_row("Standby State",
                                    create_radio_input("hot_standby", [{
                                        text: "Remain connected",
                                        value: "yes"
                                    }, {
                                        text: "Disconnect",
                                        value: "no"
                                    }], {
                                        block: true
                                    }), "conn.standbyState"
                                )
                            ),
                            $("<tbody/>").addClass("idle_disconnect_panel modem cellular").append(
                                create_form_row("Idle Disconnect", [
                                    $("<input/>", { type: "checkbox", name: "idle_sleep" }).val("yes").addClass("idle_action"),
                                    $("<span/>").addClass("idle").append(
                                        $("<input/>", { name: "idle_timeout" }).attr("size", 3).css({ "margin-left": "3px" }),
                                        " minutes<br>",
                                        $("<span/>").addClass("greyText").append(
                                            "Time value is global. A change will affect all WAN profiles."
                                        )
                                    )
                                ])
                            ),
                            $("<tbody/>").addClass("icmp_ping_panel").append(
                                create_form_row("Reply to ICMP Ping", $("<div/>").append(
                                    create_radio_input("reply_icmp_ping", {
                                        "yes": "Yes",
                                        "no": "No"
                                    }, "yes")
                                ), "conn.icmpPing")
                            )
                            .toggleClass("hide", !!window.operating_mode_as_bridge),
                            $("<tbody/>").addClass("bandwidth_panel ethernet cellular adsl gre openvpn wovlan").append(
                                $.map([ "upload", "download" ], function(key) {
                                    var name = key.charAt(0).toUpperCase() + key.slice(1);
                                    return create_form_row(name + " Bandwidth", [
                                        $("<input/>", { name: key + "_value" }).attr("size", 8),
                                         __create_bandwidth_selector(key + "_unit")
                                    ], ("conn.bandwidth." + key));
                                })
                            )
                        ),
                        panel["modem_settings"].addClass("modem"),
                        panel["cellular_settings"].addClass("cellular"),
                        panel["wifi_settings"].addClass("wifi"),
                        panel["signal_threshold"].addClass("cellular wifi"),
                        $("<table/>").addClass("form_table sep phy_table").append(
                            $("<thead/>").append(
                                create_form_title("Physical Interface Settings")
                            ),
                            $("<tbody/>").addClass("port_speed ethernet").append(
                                create_form_row("Port Speed", $.merge([
                                        $("<select/>", { name: "port_speed" })
                                            .addClass("check_physical_action")
                                    ], create_checkbox({
                                        "advertise_speed": {
                                            value: "yes",
                                            text: "Advertise Speed"
                                        }
                                    })
                                ), "phy.portSpeed")
                            ),
                            panel["mtumss"],
                            $("<tbody/>").addClass("mac_addr ethernet").append(
                                create_form_row("MAC Address Clone", [
                                    $("<span/>").addClass("mac_addr_panel").append(
                                        create_radio_input("default_mac", [{
                                            text: "Default",
                                            value: "yes"
                                        }, {
                                            text: "Custom",
                                            value: "no"
                                        }], { className: "check_physical_action" })
                                    ),
                                    create_mac_input({ name: "mac_addr" })
                                ], "phy.mac")
                            ),
                            $("<tbody/>").addClass("vlan_panel ethernet vdsl").append(
                                create_form_row("VLAN", $("<div/>").append(
                                    $("<input/>", { "type": "checkbox", "name": "vlan_enable" })
                                        .addClass("check_physical_action").val("yes"),
                                    $("<span/>").addClass("vlan_enable_panel hide")
                                        .append(" VLAN ID: "),
                                    $("<input/>", { "name": "vlan_id", "maxlength": "4" })
                                        .addClass("vlan_enable_panel hide")
                                        .attr("size", "5")
                                ), "phy.vlan")
                            ),
                            $("<tbody/>").addClass("poe_panel").append(
                                create_form_row("PoE Enable", $("<div/>").addClass("content").append(
                                    $("<label/>").append($("<input/>", {
                                        type: "checkbox",
                                        name: "poe_enable"
                                    }).val("yes"))
                                ))
                            ),
                            panel["vpivci"].addClass("adsl vdsl"),
                            panel["greuplink"].addClass("gre"),
                            panel["openvpn_uplink_priority"].addClass("openvpn"),
                            panel["wovlan_uplink"].addClass("wovlan")
                        ),
                        panel["hc"],
                        $("<table/>")
                        // [Bug#22655] Hide "Bandwidth Allowance" from device in bridge mode
                        .addClass(
                            !!window.operating_mode_as_bridge ?
                            "hide" :
                            "form_table sep ethernet modem wifi adsl gre wovlan"
                        ).append(
                            $("<thead/>").append(
                                create_form_title("Bandwidth Allowance Monitor")
                            ),
                            $("<tbody/>").addClass("multi_col_flex_tbody").append(
                                $("<tr/>").addClass("tablecontent2").append(
                                    $("<td/>", { colspan: 2 }).append(
                                        $("<div/>").addClass("tabletitle2 multi_col_flex_bg"),
                                        panel["bam"].addClass("multi_col_flex single")
                                    )
                                )
                            )
                        ),
                        $("<table/>").addClass("form_table sep multiple_ip_panel ethernet adsl gre wovlan").append(
                            $("<thead/>").append(
                                create_form_title("Additional IP Address Settings")
                            ),
                            $("<tbody/>").append(
                                create_form_row("Additional IP Address", panel["multiip"], "multiip")
                            )
                        ),
                        panel["ddns"],
                        panel["wifi_profile"].addClass("hide wifi"),
                        panel["subnet_database"] || "",
                    )
                )
            );
            register_sche_selector(div.find(".schedule_panel [name=conn_enable]"));
            register_sche_selector(div.find(".poe_panel [name=poe_enable]"));
    
            // [Bug#25664] Hot Standby State by Schedule
            register_sche_selector(
                div.find("[name=hot_standby][value=yes]"),
                {
                    alwaysOn: "Always"
                }
            );
    
            panel["conn_method"].triggerHandler("reposition", [ panel["conn_method"] ]);
    
            div
            .addClass("ctrl")
            .on("switch_on_modem_ethernet", function(e) {
                return switch_modem_ethernet(true);
            })
            .on("switch_off_modem_ethernet", function(e) {
                return switch_modem_ethernet(false);
            });
    
            div
            .on("__reset.conn_dialog", function() {
                var me = $(this);
                var panel = me.data("panel");
                me.find(".loading").toggleClass("hide", false);
                me.find(".no_info").toggleClass("hide", true);
                me.find(".content").toggleClass("hide", true);
                $.each(panel, function(_, o) {
                    if (o) {
                        o.triggerHandler("__reset");
                    }
                })
                me.find("[name=advertise_speed]").prop("checked", true);
                me.removeData("sim_count");
            })
            .on("__init_cellular.conn_dialog", function(e, _ref, _info) {
                var me = $(this);
                var info = _info || {};
                var ref = _ref || {};
                var port_id = info["port"]["id"];
                var cellular_o = ref["port"][port_id]["cellular"] || {};
                var sfc_str = getSFCStr({
                    transform_string: "fcrrqFhfvba pbaarpg LTE",
                    letter_style: "snakecase"
                });
                var sfc_support_str = "support" + sfc_str.charAt(0).toUpperCase() + sfc_str.slice(1);
                var cellular_ref = jsonGetObject(cellular_o, [
                    sfc_support_str + ".b",
                    "ratSelection>hasRatSelection.b",
                    "supportRemoteSim.b",
                    "supportFusionSim.b",
                    "simCount>sim_count.d", "moduleModel>module_model", {
                    "networkMode>ntw_mode.a": [ "name>text", "value" ],
                    "antenna.a": [ "name", "value" ],
                    "antennaHelpText.a": ">",
                    "carrierProfile>carrier_profile.a": ">",
                    // [Bug#27556]
                    "eSim.a": ">.d",
                    // [Bug#25248] RAT Selection
                    "ratSelection": [
                        "name", {
                        "capability.o": {
                            ">.a": ">"
                        },
                        "description.a": [
                            "name",
                            "value"
                        ]
                    }]
                }]);
                var ui_cap = {};
                var panel = me.data("panel");
                var supported_data_bearer = {};
                var o, v;
    
                $.each($.merge([ "default" ], cellular_ref["ntw_mode"]), function(_, o) {
                    var v = _e(o["value"]) ? o["value"] : "default";
                    var arr = cellular_o["capability"][v] || [];
                    ui_cap[v] = _e(arr) ? arr : cellular_o["capability"]["default"];
                });
    
                // [Bug#25248] RAT Selection Handling
                //	Initialize the Setting Row / Selection
                if (cellular_ref["hasRatSelection"]) {
                    o = me.find("[name=data_bearer]");
                    o.closest(".flex_row.ui_cap")
                    // .find(".title").toggleClass("hide", true).end()
                    .find(".flex_th .title").text(cellular_ref["ratSelection"]["name"]).end()
                    v = $.map(cellular_ref["ratSelection"]["description"], function(o) {
                        return [[ o["value"] || "", o["name"] || "" ]];
                    });
                    $.each(o, function() {
                        $(this).empty().append(create_option_array(v));
                    });
                }
    
                $.each(ui_cap, function(type, arr) {
                    // [Bug#25248] RAT Selection Handling
                    //	Capability directly from ratSelection info
                    if (cellular_ref["hasRatSelection"]) {
                        o = cellular_ref["ratSelection"] || {};
                        o = o["capability"] || {};
                        v = o[type] || o["default"] || [];
                        if (v.length) {
                            arr.push("DATA_BEARER");
                        }
                        supported_data_bearer[type] = v;
                        // When overridden, leagcy checker won't be checked!
                        return;
                    }
    
                    // Legacy Checker...
                    var data_bearer_lte_3g = $.inArray("LTE_3G", arr);
                    var data_bearer_3g_2g = $.inArray("3G_2G", arr);
                    supported_data_bearer[type] = [];
                    if (data_bearer_lte_3g != -1 || data_bearer_3g_2g != -1) {
                        arr.push("DATA_BEARER");
                        if (data_bearer_lte_3g > -1) {
                            arr.splice(data_bearer_lte_3g, 1);
                            supported_data_bearer[type].push("LTE");
                            supported_data_bearer[type].push("3G");
                        }
                        if (data_bearer_3g_2g > -1) {
                            arr.splice(data_bearer_3g_2g, 1);
                            supported_data_bearer[type].push("3G"); // duplicated, but no harm
                            supported_data_bearer[type].push("2G");
                        }
                    }
                });
    
                me.data("sim_count", cellular_ref["sim_count"]);
                // Config
                panel["conn_cellular"].triggerHandler("init", [ $.extend(
                    { ui_cap: ui_cap }, cellular_ref) ]);
                panel["cellular_settings"].triggerHandler("init", [{
                    // [Bug#26716] SpeedFusion Connect => renamed SpeedFusion Connect LTE [Bug#27836]
                    support_speedfusion_connect: cellular_ref[sfc_support_str],
                    sim_count: cellular_ref["sim_count"],
                    supportRemoteSim: cellular_ref["supportRemoteSim"],
                    supportFusionSim: cellular_ref["supportFusionSim"],
                    // [Bug#27556] eSIM support
                    supportESim1: $.inArray(1, cellular_ref["eSim"]) != -1,
                    supportESim2: $.inArray(2, cellular_ref["eSim"]) != -1,
                    port_type: info["port"]["type"],
                    band_info: ref["band_info"],
                    module_model: cellular_ref["module_model"],
                    antennaHelpText: cellular_ref["antennaHelpText"],
                    antenna: cellular_ref["antenna"],
                    ui_cap: ui_cap,
                    // [Bug#25248] RAT Selection
                    rat_selection: cellular_ref["ratSelection"],
                    supported_data_bearer: supported_data_bearer
                }]);
                // Signal Threshold
                panel["signal_threshold"].triggerHandler("init", [{
                    ui_cap: ui_cap
                }]);
                Help["wan_settings"] = Help["cellular_bandwidth"];
            })
            .on("__init_modem.conn_dialog", function(e, _ref, _info) {
                var me = $(this);
                var info = _info || {};
                var ref = _ref || {};
                var port_id = info["port"]["id"];
                var port_type = info["port"]["type"];
                var panel = me.data("panel");
                var modem_o = ref["port"][port_id]["modem"] || {};
                var modem_ref = jsonGetObject(modem_o, [
                    "asModemEthernetManually.b", {
                    "capability>cap.a": ">",
                    "supportMobileType>supported_data_bearer.a": ">"
                }]);
                if (port_type == "modem") {
                    var huawei_idx = $.inArray("HUAWEI_NETWORK_TYPE", modem_ref["cap"]);
                    var generic_idx = $.inArray("GENERIC_NETWORK_TYPE", modem_ref["cap"]);
                    var supported_data_bearer = [];
                    if (huawei_idx != -1 ||
                        generic_idx != -1) {
                        modem_ref["cap"].push("DATA_BEARER");
                    }
                    if (huawei_idx > -1) {
                        modem_ref["cap"].splice(huawei_idx, 1);
                        $.merge(supported_data_bearer, [ "3G", "2G", "3G_2G", "2G_3G" ]);
                    }
                    if (generic_idx > -1) {
                        modem_ref["cap"].splice(generic_idx, 1);
                        $.merge(supported_data_bearer, modem_ref["supported_data_bearer"]);
                    }
                    panel["modem_settings"].triggerHandler("init", [{
                        supported_data_bearer: supported_data_bearer,
                        ui_cap: modem_ref["cap"]
                    }]);
                }
                Help["wan_settings"] = modem_ref["asModemEthernetManually"] &&
                    info["port"]["physical_type"] == "modem" ? (
                    info["phy"]["asModemEthernet"] ? Help["modem_ethernet.to_modem"] :
                    Help["modem_ethernet.to_ethernet"]) : undefined;
            })
            .on("__init_wifi.conn_dialog", function(e, _ref, _info) {
                var me = $(this);
                var info = _info || {};
                var ref = _ref || {};
                var port_id = info["port"]["id"];
                var panel = me.data("panel");
                var wifi_o = ref["port"][port_id]["wifi"] || {};
                var wifi_ref = jsonGetObject(wifi_o, [
                    "supportAp>support_ap.b",
                    "support8021x>support_auth_8021x.b", {
                    "supportRoaming>roaming_option.a": ">",
                    "supportRadioPolicy>radio_policy.a": ">",
                    "supportSecurityPolicy.a": ">"
                }]);
                panel["wifi_profile"].triggerHandler("init", [ wifi_ref ]);
                panel["wifi_settings"].triggerHandler("init", [ wifi_ref ]);
                panel["signal_threshold"].triggerHandler("init", [{
                    ui_cap: { "default": [ "SIGNAL_THRESHOLD", "SIGNAL_THRESHOLD_WIFI_RSSI" ] }
                }]);
            })
            .on("init.conn_dialog", function(e, _ref, _info) {
                var me = $(this);
                var info = _info || {};
                var ref = _ref || {};
                var port_id = info["port"]["id"];
                var port_type = info["port"]["type"];
                var panel = me.data("panel");
                var o;
    
                Help["wan_settings"] = "";
                panel["conn_priority"].triggerHandler("init", [
                    ref["port_count"]
                ]);
                me.find("[name=port_speed]").empty().append(
                    create_option_array(
                        $.map(ref["port"][port_id]["support_speed"], function(v) {
                            return [[ v, getPortSpeedMap(v) ]];
                        })
                    )
                );
                panel["greuplink"].triggerHandler("set_greuplink_option", [ me.data("ref_conn") ]);
                panel["openvpn_uplink_priority"].triggerHandler("init", [{
                    conn: me.data("ref_conn"),
                    id: info["id"]
                }]);
                panel["wovlan_uplink"].triggerHandler("init", [{
                    conn: me.data("ref_conn"),
                    id: info["id"]
                }]);
                panel["bam"].triggerHandler("init");
                if (port_type == "cellular") {
                    me.triggerHandler("__init_cellular", [ ref, info ]);
                }
                if (port_type == "modem" || info["port"]["physical_type"] == "modem") {
                    me.triggerHandler("__init_modem", [ ref, info ]);
                }
                if (port_type == "wifi") {
                    me.triggerHandler("__init_wifi", [ ref, info ]);
                }
                me.find(".wan_settings").toggleClass("hide", !_e(Help["wan_settings"]));
            })
            .on("__set.conn_dialog", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var conn = info["conn"];
                var port = info["port"];
                var panel = me.data("panel");
                var o;
    
                var	obj;
                me.data({
                    "synergy": port["synergy"],
                    "port_type": port["type"],
                    "conn_id": info["id"],
                    "support_poe": info["support_poe"]
                });
                me.toggleClass("asLan", !!info["asLan"]);
                // Connection Settings
                panel["conn_name"].triggerHandler("__set", [
                    info["name"], info["default_name"]
                ]);
                o = me.find("[name=conn_enable]");
                o.prop("checked", info["enable"]);
                if (o.data("sche_sel")) {
                    o.data("set_fn")(o, info["sche_profile"]);
                }
                panel["conn_method"].triggerHandler("__set", [ info ]);
                panel["conn_priority"].triggerHandler("__set", [ info ]);
                me
                .find("[name=route_from_bgp]")
                    .prop("checked", info["route_bgp"])
                .end();
    
                // Standby State
                o = me.find("[name=hot_standby]");
                o
                .filter("[value=\"" +
                    (info["hotStandby"]["enable"] ?
                    "yes" : "no") + "\"]")
                .prop("checked", true);
    
                // [Bug#25664] Hot Standby State by Schedule
                if (o.data("sche_sel")) {
                    o.data("set_fn")(o, info["hotStandby"]["schedule"]);
                }
    
                // Idle Disconnect
                me
                .find("[name=idle_sleep]")
                    .prop("checked", info["idle_timeout"] > 0)
                .end()
                .find("[name=idle_timeout]")
                    .val(info["idle_timeout"] > 0 ?
                        parseInt(info["idle_timeout"] / 60, 10) : 3)
                .end()
                // Reply to ICMP Ping
                .find("[name=reply_icmp_ping]")
                    .filter("[value=\"" + (info["icmpPing"] ? "yes" : "no") + "\"]")
                        .prop("checked", true)
                    .end()
                .end()
    
                // Bandwidth
                obj = info["bandwidth"] || {};
                me.find(".bandwidth_panel")
                .toggleClass("hideui", !!obj["hideui"]);
                $.each([ "upload", "download" ], function(_, k) {
                    var	o = obj[k];
                        arr = auto_unit(o["value"],
                            o["unit"], {
                                mode: "integer"
                            }).split(" ");
                    me
                    .find("[name=\"" + k + "_value\"]")
                    .val(+arr[0] ? arr[0] : "");
                    me
                    .find("[name=\"" + k + "_unit\"]")
                    .find("[value=\"" + arr[1] + "\"]")
                    .prop("selected", true);
                });
                // Connection Cellular Settings
                panel["conn_cellular"].triggerHandler("__set", [ info["conn"] ]);
                // Cellular Settings
                panel["cellular_settings"].triggerHandler("__set", [
                    $.extend({
                        "network_mode": info["conn"]["network_mode"],
                        "conn_id": info["id"]
                    }, info["cellular"])
                ]);
                // Modem Settings
                panel["modem_settings"].triggerHandler("__set", [ info["modem"] ]);
                // Wifi Settings
                panel["wifi_settings"].triggerHandler("__set", [ info["wifi"] ]);
                // Signal Threshold Settings
                panel["signal_threshold"].triggerHandler("__set", [
                    (info[port["type"]] || {})["signal_threshold"]
                ]);
                // Physical Settings
                // Port Speed
                me.find("[name=port_speed]")
                    .find("[value=\"" + info["phy"]["speed"] + "\"]")
                        .prop("selected", true)
                    .end()
                .end()
                if (info["phy"]["speed"] != "Auto" &&
                    info["phy"]["advertise_speed"] === false) {
                    me.find("[name=advertise_speed]").prop("checked", false);
                }
                // MAC Address
                me.find("[name=default_mac]")
                    .filter("[value=\"" +
                        (info["phy"]["use_default_mac"] ? "yes" : "no") +
                        "\"]").prop("checked", true)
                    .end()
                .end()
                .find("[name=mac_addr]")
                .data({
                    "_prev_mac_default": info["phy"]["use_default_mac"] ? "yes" : "no",
                    "sim_mac": port["sim_mac"],
                    "default_mac": port["default_mac"]
                })
                .end()
                o = me.find("[name=mac_addr]");
                o.attr("placeholder", port["default_mac"]);
                if (!info["phy"]["use_default_mac"]) {
                    me.find("[name=mac_addr]")
                    .val(info["phy"]["mac"]).end();
                }
                // VLAN
                me.find("[name=vlan_enable]").prop("checked",
                    checkIntFormat(info["phy"]["vlan"],
                        getValidateRangeObj({ type: "vlan_id" }))
                    )
                .end()
                .find("[name=vlan_id]").val(info["phy"]["vlan"] || "").end();
                o = me.find("[name=poe_enable]");
                o.prop("checked", info["phy"]["poe_enable"]);
                if (o.data("sche_sel")) {
                    o.data("set_fn")(o, info["phy"]["poe_sche_profile"]);
                }
                // MTU / MSS
                panel["mtumss"].triggerHandler("__set", [ info ]);
                // VPI / VCI
                panel["vpivci"].triggerHandler("__set", [ info["phy"] ]);
                // GRE Uplink Interface
                panel["greuplink"].triggerHandler("__set", [ info["phy"] ]);
                panel["openvpn_uplink_priority"].triggerHandler("__set", [ info["phy"]["openvpn"] ]);
                panel["wovlan_uplink"].triggerHandler("__set", [ info["phy"] ]);
                // Health Check
                panel["hc"].triggerHandler("set", [
                    $.extend({ port_type: port["type"] }, info["hc"])
                ]);
                // Bandwidth Allowance Monitor
                panel["bam"].triggerHandler("__set", [ info["bam"] ]);
                // Subnet Database
                // Nothing to set
                // Additional IP Address
                panel["multiip"].triggerHandler("set", [ info["multiip"], true ]);
                // Dynamic DNS
                panel["ddns"].triggerHandler("set", [ info["ddns"] ]);
                // Wi-Fi Connection Profiles
                panel["wifi_profile"].triggerHandler("__set", [ info["wifi_profile"], info["wifiConnectionProfile"] ]);
            })
            .on("set_operator_status.conn_dialog", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var port_type = me.data("port_type");
                var panel = me.data("panel")[port_type + "_settings"];
                var o = panel ? (panel.data("panel") || {})["operator"] : undefined;
                if (o) {
                    o.triggerHandler("__set", [ info ]);
                }
            })
            .on("idle_action.conn_dialog", function() {
                var me = $(this);
                var panel = me.data("panel");
                var o = panel["cellular_settings"];
                me.find(".idle").toggleClass("hide",
                    !me.find("[name=idle_sleep]").is(":checked")
                );
                if (o && !o.hasClass("hide")) {
                    o.triggerHandler("redraw", {
                        allow_failback_idle_sleep: !me.find("[name=idle_sleep]").is(":checked")
                    });
                }
            })
            .on("check_physical_action.conn_dialog", function() {
                var me = $(this);
                var o, v;
                me.find("[name=advertise_speed]").closest("label").toggleClass("hide",
                    me.find("[name=port_speed] option:selected").val() == "Auto"
                );
                me.find(".vlan_enable_panel").toggleClass("hide",
                    !me.find("[name=vlan_enable]").is(":checked")
                );
                v = me.find("[name=default_mac]:checked").val();
                o = me.find("[name=mac_addr]");
                if (o.data("_prev_mac_default") != v) {
                    o.data("_prev_mac_default", v);
                    o.val(v == "yes" ? o.data("sim_mac") : o.data("default_mac"));
                }
                o.prop({
                    disabled: v == "yes",
                    readonly: v == "yes"
                })
            })
            .on("redraw.conn_dialog", function() {
    // FIXME: Why cellular called redraw twice?
    // FIXME: Why modem called redraw twice?
    
                var me = $(this);
                var port_type = me.data("port_type");
                var panel = me.data("panel");
                var o;
                me.find(".settings")
                .find(".ethernet, .modem, .cellular, .wifi, .adsl, .gre, .openvpn, .wovlan")
                    .toggleClass("hide", true)
                    .filter(function() {
                        return $(this).hasClass(port_type);
                    }).toggleClass("hide", false)
    
                // [Bug#18749] Special Handling of Cellular Bandwidth
                // [Bug#28348] Cellular Bandwidth will now always be defined
                if (port_type == "cellular") {
                    o = me.find(".bandwidth_panel");
                    if (o.hasClass("hideui")) {
                        o.toggleClass("hide", true);
                    }
                }
                // Multiple IP Panel
                if (me.data("synergy")) {
                    me.find(".multiple_ip_panel").toggleClass("hide", true);
                }
    
                // Connection Settings
                // Idle Disconnect
                me.triggerHandler("idle_action");
                // TODO: Enhancement should be done by the sche_selector.js library
                o = me.find("[name=conn_enable]");
                if (o.data("sche_sel")) {
                    o.data("redraw_fn")(o);
                    if (!o.is(":visible") && !o.data("sche_sel").is(":visible")) {
                        o.closest("tr").hide();
                    }
                }
                panel["conn_priority"].toggleClass("hide", !o.is(":checked"));
                // [Bug#14312] Standby State only supported in MAX for ethernet port
                // [Bug#13407] No standby state for dcs in bridge mode
                // [Bug#27686] Support also for Balance for ethernet port
                me.find(".standby_state_panel").toggleClass("hide",
                    !!window.operating_mode_as_bridge
                );
                // Connection Method / Routing Mode / DNS Servers / IP Passthrough
                panel["conn_method"].triggerHandler("redraw");
                // Priority / Independent of Backup WANs
                panel["conn_priority"].triggerHandler("redraw");
                // [Bug#19520] Default froute from BGP
                o = me.find(".bgp_gateway_panel");
                o.toggleClass("hide",
                    !o.find("[name=route_from_bgp]").is(":checked"));
                // Physical Interface Settings
                me.triggerHandler("check_physical_action");
                // PoE
                o = me.find(".poe_panel");
                o.toggleClass("hide", !me.data("support_poe"));
                if (!o.hasClass("hide")) {
                    o = me.find("[name=poe_enable]");
                    if (o.data("sche_sel")) {
                        o.data("redraw_fn")(o);
                        if (!o.is(":visible") && !o.data("sche_sel").is(":visible")) {
                            o.closest("tr").hide();
                        }
                    }
                }
                // WOVLAN
                panel["wovlan_uplink"].triggerHandler("redraw");
                // MTU / MSS
                panel["mtumss"].triggerHandler("redraw");
                // Health Check
                panel["hc"].triggerHandler("redraw");
                // Bandwidth Allowance Monitor
                panel["bam"].triggerHandler("redraw");
                // Dynamic DNS
                panel["ddns"].triggerHandler("redraw");
                if (port_type == "modem") {
                    panel["modem_settings"].triggerHandler("redraw");
                }
                if (port_type == "cellular") {
                    panel["conn_cellular"].triggerHandler("redraw");
                    panel["cellular_settings"].triggerHandler("redraw");
                    panel["signal_threshold"].triggerHandler("redraw");
                }
                if (port_type == "wifi") {
                    panel["wifi_settings"].triggerHandler("redraw");
                    panel["signal_threshold"].triggerHandler("toggle_ui_cap");
                    panel["signal_threshold"].triggerHandler("redraw");
                }
            })
            .on("reload_summary.conn_dialog", function(e) {
                var me = $(this);
                return $.ajax("api.cgi", {
                    cache: false,
                    data: {
                        func: "config.wan.connection",
                        configType: "active",
                        infoType: "connection physical",
                        reference: "yes"
                    },
                    context: me
                }).done(function(json) {
                    var me = this;
                    var info = jsonGetObject(json, { "response>.o": [
                        "name", "active.b", "asLan>as_lan.b", "enable.b", {
                        "connection>": [
                            "routingMode",
                            "groupSet.d",	// [Bug#25400]
                            "priority.d", {
                            "method>": [ "type>method", {
                                "detail>": [
                                    "dropin>is_dropin.b",
                                    "ipPassthrough>is_ipp.b"
                                ]
                            }]}
                        ],
                        "physical>": [ "portId>port_id.d", "type>port_type", "virtualType>virtual_port_type" ]
                        }
                    ], "response>": { "reference>": {
                        "port.o": [ "name", "supportAsLan>support_as_lan.b" ],
                        "wan>conn.o": [ "defaultName", {
                            "module": [ "type", "id.d", "slotId>slot_id.d", "portId>port_id.d", "virtual.b" ]
                        }]
                    }}});
                    var ref_conn = {};
                    var cb = me.data("callback");
                    $.each(info["_order"], function(_, id) {
                        var o = info[id];
                        if (o["port_id"]) {
                             o["port_name"] = info["port"][o["port_id"]]["name"];
                             o["support_as_lan"] = info["port"][o["port_id"]]["support_as_lan"];
                        }
                        o["routing_mode"] = o["is_dropin"] ? "Drop-in" :
                            o["is_ipp"] ? "IP Passthrough" :
                            _e(o["routingMode"]) ? o["routingMode"] : "-";
                        o["port_type"] = o["port_type"] == "gobi" ?
                            "cellular" : o["port_type"] == "wireless" ? "wifi" :
                                o["port_type"];
                        o["module"] = info["conn"][id]["module"];
                        o["name"] = _e(o["name"]) ? o["name"] : info["conn"][id]["defaultName"];
                        ref_conn[id] = {
                            name: o["name"],
                            virtual_port_type: o["virtual_port_type"]
                        };
                    });
                    ref_conn["_order"] = info["_order"];
                    if (cb && _e(info["_order"])) {
                        info["_order"].sort(function(a, b) {
                            var slot_a = +(info[a]["module"] || {})["slot_id"];
                            var slot_b = +(info[b]["module"] || {})["slot_id"];
                            // Put value 999 to force those WAN w/o active slot to the bottom
                            if (slot_a === 0) {
                                slot_a = 999;
                            }
                            if (slot_b === 0) {
                                slot_b = 999;
                            }
                            var res = slot_a - slot_b;
                            return res == 0 ? +a - +b : res;
                        });
                        // FIXME: The interaction and handling flow
                        //	should be revisied!
                        cb.triggerHandler("redraw", [ info ]);
                    }
                    me.data("ref_conn", ref_conn);
                });
            })
            .on("reload.conn_dialog", function(e, conn_id) {
                return $.ajax("api.cgi", {
                    method: "POST",
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify({
                        func: "config.wan.connection",
                        configType: "active",
                        id: conn_id,
                        reference: true,
                        webui: true
                    }),
                    context: [ $(this), conn_id ]
                }).then(api_cgi_filter)
                .done(function(json) {
                    var me = this[0];
                    var conn_id = this[1];
                    var dfd;
                    var	parse_conn_method_details = function(json, method) {
                        var parse_static_ip = [ "ip", "mask.d", "gateway" ];
                        var	map = {
                                dhcp: [
                                    "hostname",
                                    "sharedIpAddress>shared_ip.b",
                                    "dropin>is_dropin.b",
                                    "ipp>is_ipp.b",
                                    "managementNetwork>hasManagementNetwork.b", {
                                    "managementNetwork": [
                                        "ip",
                                        "mask.d"
                                    ]
                                }],
                                staticIp: $.merge([
                                    "sharedIpAddress>shared_ip.b",
                                    "dropin>is_dropin.b",
                                    "ipp>is_ipp.b",
                                    "managementNetwork>hasManagementNetwork.b", {
                                    "managementNetwork": [
                                        "ip",
                                        "mask.d"
                                    ]
                                }], parse_static_ip),
                                pppoe: [
                                    "username",
                                    "password",
                                    "service",
                                    "ip",
                                    "keepaliveInterval>keepalive_interval.d",
                                    "keepaliveRetry>keepalive_retry.d",
                                    "dropin>is_dropin.b",
                                    "sharedIpAddress>shared_ip.b",
                                    "ipp>is_ipp.b",
                                    "managementNetwork>hasManagementNetwork.b", {
                                    "managementNetwork": [
                                        "ip",
                                        "mask.d"
                                    ]
                                }],
                                l2tp: [
                                    "username",
                                    "password",
                                    "host",
                                    "staticIp>is_static.b",
                                    "sharedIpAddress>shared_ip.b",
                                    "dropin>is_dropin.b",
                                    "ipp>is_ipp.b", {
                                    "staticIp": parse_static_ip
                                    }
                                ],
                                gre: [
                                    "host",
                                    "local",
                                    "remote",
                                    "nat",
                                    "sharedIpAddress>shared_ip.b",
                                    "dropin>is_dropin.b",
                                    "ipp>is_ipp.b", {
                                    "staticIp": parse_static_ip
                                    }
                                ],
                                openvpn: [
                                    "username", "password",
                                    "ovpnFile>has_ovpn_file.b", {
                                    "ovpnFile>ovpn_file":
                                        [ "server", "protocol", "port.d" ]
                                    }
                                ]
                            };
                        var info = jsonGetObject(json, map[method]);
                        if (info["is_dropin"]) {
                            info["host"] = jsonGetObject(json["dns"], { "host>.a" : ">" });
                        }
                        return info;
                    };
                    var parse_health_check_details = function(json) {
                        var info = jsonGetObject(json, [
                            "enable.b",
                            "timeout>hc_timeout.d", "interval>hc_interval.d",
                            "retry>hc_retry.d", "recovery>hc_recovery.d", {
                            "method>": [ "type>hc_method", "detail.e" ]
                        }]);
                        var map = {
                            ping: {
                                "host>hc_ping_host.a": ">"
                            },
                            nslookup: [
                                "includePublic>hc_nslookup_public.b", {
                                "host>hc_nslookup_server.a": ">",
                            }],
                            http: {
                                "host>hc_http_web.a": [ "url", "pattern" ]
                            },
                            smartcheck: {
                                "host>hc_pstr_host.a": ">"
                            }
                        };
                        var _def = {
                            hc_method: "disabled",
                            hc_ping_host: [],
                            hc_nslookup_public: false,
                            hc_nslookup_host: [],
                            hc_http_web: []
                        };
                        $.extend(info, !info["enable"] ? _def :
                            jsonGetObject(info["detail"], map[info["hc_method"]])
                        );
                        info["hc_method"] = info["hc_method"] == "smartcheck" ? "pstr" : info["hc_method"];
                        delete info["detail"];
                        return info;
                    };
                    var parse_wifi_roaming_details = function(json, algo) {
                        var info = jsonGetObject(json, [
                            "enable.b", {
                            "algorithm>": [ "type>algo", "detail.e" ]
                        }]);
                        var normal_detail = [
                            "checkInterval>interval.d", {
                            "signalLevel>signal": [
                                "threshold.d",
                                "gain.d"
                            ]
                        }];
                        var express_detail = {
                            "relative": "minimumSignalDifference>min_signal_diff.d",
                            "absolute": {
                                "signalThreshold>": [
                                    "upper>upper_signal_thres.d",
                                    "lower>lower_signal_thres.d"
                                ],
                                "dynamicZone>": [
                                    "inner>inner_dynamic_zone.d",
                                    "outer>outer_dynamic_zone.d"
                                ]
                            }
                        }
                        var map = {
                            normal: normal_detail,
                            advanced: $.merge([{
                                "intensiveScan>intensive": [
                                    "enable.b",
                                    "signalLevel>signal.d",
                                    "scanInterval>interval.d"
                                ]
                            }], normal_detail),
                            express: [
                                "diagnosticLevel>diag_level",
                                "confirmPeriod>confirm_period.d",
                                "authenticationTimeout>auth_timeout.d", {
                                "signalMode>": [
                                    "type>signal_mode",
                                    "detail>express_detail.e"
                                ],
                                "forceRoam>force_roam": [
                                    "enable.b",
                                    "threshold.d"
                                ],
                                "backupDisconnect>backup_disconnect": [
                                    "mode",
                                    "delay.d"
                                ]
                            }]
                        }
                        $.extend(info, jsonGetObject(info["detail"], map[info["algo"]]));
                        if (info["algo"] == "express") {
                            $.extend(info, jsonGetObject(info["express_detail"],
                                express_detail[info["signal_mode"]]));
                        }
                        return info;
                    }
                    var _json = jsonGetObject(json, { "response>.o": [
                        "name", "asLan.b", "enable.b", "active.b", "schedule>sche_profile.d",
                        "connection>_cm.e", "healthcheck>_hc.e", {
                        "connection>conn": [
                            "routingMode>routing_mode", "pepvpnNat.b",
                            "useLanIp.b",
                            "cellularProfile>cellular_profile", {
                            "method>": [ "type>method", "detail>method_detail.e", {
                                "detail>": [
                                    "ipPassthrough>is_ipp.b", "dropin>is_dropin.b",
                                    "dhcpLeaseTime.d", {
                                    "staticRoute>stroute.a": [ "ip", "mask.d" ],
                                }]
                            } ],
                            "cellular>": "networkMode>network_mode"
                        }],
                        "connection>": [
                            "priority.d", "groupSet>group_set.d", "ignoreDefaultGateway>route_bgp.b",
                            "icmpPing.b", "idleTimeout>idle_timeout.d", {
                            "hotStandby": [
                                "enable.b",
                                "schedule.d"
                            ],
                            "dns": [ "auto>is_auto.b", { "host.a": ">" }],
                            "bandwidth": [
                                "__isDefault>hideui.b", {
                                "upload": [ "value.d", "unit" ],
                                "download": [ "value.d", "unit" ]
                            }],
                            "modem": [
                                "mobileType>data_bearer", "simPin>sim_pin",
                                "operator>operator_custom.b", {
                                "huaweiBand.a": ">",
                                "operator": [
                                    "apn", "username", "password",
                                    "dialNumber>dial_num"
                                ]
                            }]
                        }],
                        "physical>port": [ "virtualType>type", "type>physical_type", "portId>id.d", "synergy.b" ],
                        "physical>phy": [
                            "ttl",
                            "mtu.d", "mss.d", "mac", "vlan.d", "vpi.d", "vci.d",
                            "speed", "advertise>advertise_speed.b",
                            "wovlan>hasWovlan.b",
                            "greUplink>greuplink.d", "asModemEthernet.b", {
                            "openvpn": [ "failback.b", { "uplink.o": "priority.d" }],
                            "wovlan": [ "uplink", "vlanId.d" ],
                            "poe>": [ "enable>poe_enable.b", "schedule>poe_sche_profile.d" ]
                        }],
                        "bandwidthAllowanceMonitor>bam": [
                            "enable.b", "hasSmtp.b", "start.d", {
                            "action.a": ">",
                            "monthlyAllowance>quota": [ "value.d", "unit" ]
                        }],
                        "ddns": [
                            "username", "password", "provider",
                            "customUrl>others_url", "useWanIp.b", {
                            "host.a": ">"
                        }],
                        "multipleIp>multiip.a": ">",
                        "wifi": [
                            "country>country_code.d",
                            "channelWidth", "dataRate>data_rate",
                            "power>txlevel", "powerBoost>txboost.b",
                            "autoConnect>auto_connect.b",
                            "beaconMissCounter>beacon_miss_counter.d",
                            "channelScanInterval>scan_interval.d",
                            "roaming>_roaming.e", {
                            "channel>serial_channel_list.a": ">.d",
                            "signalThreshold>signal_threshold": {
                                "signalLevel>bar.a": ">.d",
                                "rssi>wifi_rssi.a": ">.d"
                            }
                        }],
                        "wifi>": [ "wifiConnectionProfile.e", {
                            "wifiConnectionProfile>wifi_profile.o": [
                                "enable.b", "ssid", "preferredBssid", {
                                "method>conn": [ "type>method", "detail>method_detail.e" ],
                                "dns": [ "auto>is_auto.b", { "host.a": ">" }],
                                "security": {
                                        "policy": [
                                        "type", {
                                        "detail": [ "key",
                                                "method", "username", "password",
                                                "phase2Method",
                                                "outerAuthenticationId", {
                                                "certificate": [ "ca", "client" ]
                                                }
                                            ]
                                        }]
                                    }
                                }
                            ]
                        }],
                        "cellular": [
                            "useExternalAntenna>external_antenna.b",
    //						"simCardScheme",
                            "preferredSim>preferred_sim.d",
                            "failbackTimeout>failback_timeout.d",
                            "idleTimeout>idle_timeout.d", {
                            "useAntenna.a": ">",
                            // [Bug#25957] New SIM Card selection method
                            "scheme": [
                                "type", {
                                "detail.o": [
                                    "enable.b",
                                    "priority"
                                ]
                            }],
    
                            "remoteSim>": { "simPool>remote_sim_pool.a": ">" },
                            "alternateSim": [
                                "day.d",
                                "hour.d"
                            ],
                            "sim.o": [
                                "mobileType>data_bearer", "simPin>sim_pin",
                                "optimalNetwork>opt_ntw_enable.b",
                                "authentication>auth",
                                "operator>operator_custom.b", {
                                "carrierSelection>carrier_selection.a": [
                                    "plmn",
                                    "mcc", "mnc", "pcs.d",
                                    "name"
                                ],
                                "nr5gBandChannelPciLock": [ "band", "channel", "pci" ],
                                "lteChannelPciLock": [ "channel", "pci" ],
                                "optimalNetwork>opt_ntw": [ "discovery>interval.d", {
                                    "period.a": ">"
                                }],
                                "bandSelection>band_list.a": ">",
                                "roaming": [ "enable.b", "mode", { "accessControlList>acl.a": ">" }],
                                "operator": [ "apn", "username", "password" ],
                                "bandwidthAllowanceMonitor>bam": [
                                    "enable.b", "hasSmtp.b", "start.d", {
                                    "action.a": ">",
                                    "monthlyAllowance>quota": [ "value.d", "unit" ]
                                }]
                            }],
                            "signalThreshold>signal_threshold": {
                                "signalLevel>bar.a": ">.d",
                                "rsrp.a": ">.d",
                                "sinr.a": ">.d",
                                "rssi.a": ">.d"
                            }
                        }]
                    }], "response>": {
                        "reference>ref": {
                            "port>port.o": [
                                "name", "supportIpPassthrough>support_ipp.b",
                                "supportDropin>support_dropin.b",
                                "supportPoe>support_poe.b",
                                "defaultMac>default_mac",
                                "simulatedMac>sim_mac",
                                "modem.e",
                                "wifi.e",
                                "cellular.e", {
                                "supportSpeed>support_speed.a": ">",
                            }],
                            "port>": [ "portCount>port_count.d" ],
                            "wan>conn.o": [ "defaultName", {
                                "module": [ "type", "id", "slotId", "portId" ]
                            }],
                            "bandInfo>band_info": {
                                "capability>cap.a": [ "mode", "type", "freq", { "list.a": ">" }],
                                "description.a": [
                                    "name>text",
                                    "value",
                                    { "channel": [ "min.d", "max.d" ] }
                                ]
                            },
                            "dnsResolver>ldns": [ "enable.b", {
                                "preferredConnection>": {
                                    "wan>conn.a": ">.d"
                                }
                            }]
                        }
                    }});
                    var info = _json[conn_id] || {};
                    var method_o = parse_conn_method_details(
                        info["conn"]["method_detail"] || {}, info["conn"]["method"]);
                    if (_json["ref"]["ldns"]["enable"] &&
                        $.inArray(conn_id, _json["ref"]["ldns"]["conn"]) != -1) {
                        $.extend(info["dns"], { ldns_enable: true });
                    }
                    info["conn"][info["conn"]["method"]] = method_o;
                    // info["conn"]["is_dropin"] = method_o["is_dropin"];
                    // info["conn"]["is_ipp"] = method_o["is_ipp"];
                    info["default_name"] = _json["ref"]["conn"][conn_id]["defaultName"] || "";
                    info["conn"]["is_ipforward"] = info["conn"]["routing_mode"] == "IP Forwarding";
                    info["hc"] = parse_health_check_details(info["_hc"]);
                    info["port"]["name"] = (_json["ref"]["port"][info["port"]["id"]] || {})["name"];
                    // info["port"]["support_speed"] = (_json["ref"]["port"][info["port"]["id"]] || {})["support_speed"];
                    info["port"]["default_mac"] = (_json["ref"]["port"][info["port"]["id"]] || {})["default_mac"];
                    info["port"]["sim_mac"] = (_json["ref"]["port"][info["port"]["id"]] || {})["sim_mac"];
                    info["phy"]["use_default_mac"] = !_e(info["phy"]["mac"]) || info["phy"]["mac"] == "default"
                    info["port"]["count"] = +_json["ref"]["port_count"];
                    info["support_ipp"] = (_json["ref"]["port"][info["port"]["id"]] || {})["support_ipp"];
                    info["support_poe"] = (_json["ref"]["port"][info["port"]["id"]] || {})["support_poe"];
                    info["wifi"]["roaming"] = parse_wifi_roaming_details(info["wifi"]["_roaming"]);
                    switch (info["wifi"]["channelWidth"]) {
                    case "20 MHz":
                        info["wifi"]["channel_width"] = "0";
                        break;
                    case "20/40 MHz":
                        info["wifi"]["channel_width"] = "1";
                        break;
                    case "20/40/80 MHz":
                        info["wifi"]["channel_width"] = "4";
                        break;
                    default:
                        info["wifi"]["channel_width"] = "auto";
                        break;
                    };
                    delete info["conn"]["method_detail"];
                    delete info["_cm"];
                    delete info["_hc"];
                    delete info["wifi"]["_roaming"];
                    delete method_o["is_dropin"];
                    delete method_o["is_ipp"];
                    if (info["port"]["type"] == "wifi") {
                        $.each(info["wifi_profile"]["_order"], function(_, id) {
                            var o = info["wifi_profile"][id];
                            var method = o["conn"]["method"];
                            var method_o = parse_conn_method_details(
                                o["conn"]["method_detail"] || {}, method);
                            o["port"] = {
                                type: "wifi"
                            }
                            o["conn"][method] = method_o;
                            delete o["conn"]["method_detail"];
                        });
                    }
                    me.triggerHandler("init", [ _json["ref"], info ]);
                    me.triggerHandler("__set", [ info ]);
                    me.find(".loading").toggleClass("hide", true);
                    me.find(".content").toggleClass("hide", false);
                    me.triggerHandler("redraw");
                })
                .fail(function() {
                    var me = this[0];
                    me.find(".loading").toggleClass("hide", true);
                    me.find(".no_info").toggleClass("hide", false);
                })
            })
            .on("validate.conn_dialog", function() {
                var me = $(this);
                var panel = me.data("panel");
                var o, r;
                var is_valid = true;
                var __bandwidth_limit = function(u) {
                    var r = {
                        min: 1
                    };
                    switch (u) {
                    case "Gbps":
                        r["max"] = 10;
                        break;
                    case "Mbps":
                        r["max"] = 10000;
                        break;
                    case "kbps":
                    default:
                        r["max"] = 10000000;
                        break;
                    }
                    return r;
                };
                // Connection Settings
                // WAN Connection Name
                if (!panel["conn_name"].triggerHandler("validate")) {
                    return false;
                }
                // Connection Method
                if (!panel["conn_method"].triggerHandler("validate")) {
                    return false;
                }
                // DNS Server
                o = panel["conn_method"].data("dns_panel");
                if (o.is(":visible") &&
                    !o.triggerHandler("validate")) {
                    return false;
                }
                // IP Passthrough
                o = panel["conn_method"].data("ipp_panel");
                if (o.is(":visible") &&
                    !o.triggerHandler("validate")) {
                    return false;
                }
                // Idle Disconnect
                o = me.find("[name=idle_sleep]");
                if (o.is(":visible") && o.is(":checked")) {
                    o = me.find("[name=idle_timeout]");
                    r = { min: 1, max: 99 };
                    o.val(trim(o.val()));
                    if (!checkIntFormat(o.val(), r)) {
                        return err("Idle disconnect time value must be between " +
                            r["min"] + " and " + r["max"], o);
                    }
                }
                // Download and Upload bandwidth
                if (me.find(".bandwidth_panel").is(":visible")) {
                    var	port_type = me.data("port_type"),
                        allow_empty = false;//port_type == "cellular";
    
                    $.each([ "download", "upload" ], function(_, str) {
                        o = me.find("[name=" + str + "_value]");
                        o.val(trim(o.val()));
                        // [Bug#18749] Special Handling for Cellular Bandwidth
                        // [Bug#28238] Empty value is no longer allowed anymore
                        if (allow_empty &&
                            (o.val() == "0" || isempty(o.val()))) {
                            o.val("");
                            return true;
                        }
                        r = __bandwidth_limit(me.find("[name=" +
                            str + "_unit] option:selected").val());
                        if (!checkIntFormat(o.val(), r)) {
                            is_valid = false;
                            return err(str[0].toUpperCase() + str.slice(1) +
                                " bandwidth must be between " +
                                r["min"] + " and " + __bandwidth_limit("kbps")["max"] +
                                " kbps (1Mbps = 1000 kbps)", o);
                        }
                    });
                    if (!is_valid) {
                        return false;
                    }
                }
                // Modem Settings
                if (!panel["modem_settings"].triggerHandler("validate")) {
                    return false;
                }
                // Cellular Settings
                if (!panel["cellular_settings"].triggerHandler("validate")) {
                    return false;
                }
                // Wi-Fi Settings
                if (!panel["wifi_settings"].triggerHandler("validate")) {
                    return false;
                }
                // Signal Threshold Settings
                if (!panel["signal_threshold"].triggerHandler("validate")) {
                    return false;
                }
                // MTU and MSS
                if (!panel["mtumss"].triggerHandler("validate", [
                    panel["conn_method"].triggerHandler("get_conn_method")
                    ])) {
                    return false;
                }
                // MAC Address
                o = me.find("[name=default_mac]:visible")
                if (o.length && o.filter(":checked").val() != "yes") {
                    o = me.find("[name=mac_addr]");
                    o.val(trim(o.val()).toUpperCase());
                    if (!checkMACFormat(o.val(), { unicast: true })) {
                        return err("Invalid MAC Address", o);
                    }
                }
                // VLAN
                if (me.find("[name=vlan_enable]:visible").is(":checked")) {
                    o = me.find("[name=vlan_id]");
                    r = getValidateRangeObj({ type: "vlan_id" });
                    o.val(trim(o.val()));
                    if (!checkIntFormat(o.val(), r)) {
                        return err("VLAN ID must be between " +
                            r["min"] + " and " + r["max"], o);
                    }
                }
                // WOVLAN
                if (!panel["wovlan_uplink"].triggerHandler("validate")) {
                    return false;
                }
                // ADSL - VPI VCI
                if (!panel["vpivci"].triggerHandler("validate")) {
                    return false;
                }
                // Health Check Settings
                if (!panel["hc"].triggerHandler("validate")) {
                    return false;
                }
                // Bandwidth Allowance Monitor Settings
                if (!panel["bam"].triggerHandler("validate")) {
                    return false;
                }
                // Additional Public IP Address Settings
                if (panel["multiip"].is(":visible")) {
                    o = panel["conn_method"].triggerHandler("check_iplist_conflict", [
                        panel["multiip"].triggerHandler("get")
                    ]);
                    if (_e(o)) {
                        return err(o, panel["multiip"]);
                    }
                }
                // Dynamic DNS Settings
                if (!panel["ddns"].triggerHandler("validate")) {
                    return false;
                }
                return is_valid;
            })
            .on("export.conn_dialog", function(e, silent_mode) {
                var me = $(this);
                var o, conn, phy = {};
                var json = {
                    id: +me.data("conn_id"),
                    name: me.find("[name=conn_name]").val(),
                    enable: me.find("[name=conn_enable]").is(":checked"),
                    healthcheck: panel["hc"].triggerHandler("export"),
                    ddns: panel["ddns"].triggerHandler("export")
                }
                // Schedule
                o = me.find(".schedule_panel [name=sche_profile]");
                json["schedule"] = o.is(":visible") && +o.val() ? +o.val() : null;
                // Connection Settings
                conn = {
                    groupSet: me.find("[name=group_set]").is(":checked") ? 1 : 0,
                    icmpPing: me.find("[name=reply_icmp_ping]:checked").val() == "yes"
                };
                // Default route from BGP
                o = me.find("[name=route_from_bgp]");
                if (o.is(":visible")) {
                    conn["ignoreDefaultGateway"] = o.is(":checked");
                }
    
                // Standby State
                conn["hotStandby"] = {};
                o = me.find("[name=hot_standby]:checked");
                if (o.is(":visible")) {
                    conn["hotStandby"]["enable"] = o.val() == "yes";
    
                    // [Bug#25664] Hot Standby State by Schedule
                    if (conn["hotStandby"]["enable"]) {
                        o = me.find(".standby_state_panel")
                        .find("[name=sche_profile]");
                        conn["hotStandby"]["schedule"] =
                            o && o.is(":visible") &&
                            +o.val() ? +o.val() : null;
                    }
                }
    
                // Idle Disconnect
                o = me.find(".conn_table [name=idle_sleep]");
                if (o.is(":visible")) {
                    conn["idleTimeout"] = o.is(":checked") ?
                        +me.find(".conn_table [name=idle_timeout]").val() : null;
                }
                // Priority and Independent from backup WAN
                $.extend(conn, panel["conn_priority"].triggerHandler("export"));
                // Routing Mode, Connection Method, IP Passthrough, DNS
                $.extend(conn, panel["conn_method"].triggerHandler("export"));
                // Network mode and Profile Settings - Cellular port only
                $.extend(conn, panel["conn_cellular"].triggerHandler("export"));
                // Upload and Download Bandwidth
                o = me.find(".bandwidth_panel");
                if (o.is(":visible")) {
                    conn["bandwidth"] = {};
                    $.each([ "upload", "download" ], function(_, key) {
                        conn["bandwidth"][key] = {
                            value: +me.find("[name=" + key + "_value]").val(),
                            unit: me.find("[name=" + key + "_unit] option:selected").val()
                        }
                    });
                }
                // Modem Settings
                o = panel["modem_settings"].triggerHandler("export");
                if (o !== undefined) {
                    json["modem"] = o;
                }
                // Cellular Settings
                o = panel["cellular_settings"].triggerHandler("export", [ silent_mode ]);
                if (o === false) {
                    return false;
                }
                if (o !== undefined) {
                    json["cellular"] = o;
                    // Signal Threshold Settings
                    o = panel["signal_threshold"].triggerHandler("export");
                    if (o !== undefined) {
                        $.extend(json["cellular"], { signalThreshold: o });
                    }
                }
                // Wifi Settings
                o = panel["wifi_settings"].triggerHandler("export");
                if (o !== undefined) {
                    json["wifi"] = o;
                    o = panel["signal_threshold"].triggerHandler("export");
                    if (o !== undefined) {
                        $.extend(json["wifi"], { signalThreshold: o });
                    }
                }
                // Physical Interface Settings
                // Speed
                o = me.find(".port_speed");
                if (o.is(":visible")) {
                    phy["speed"] = o.find("[name=port_speed] option:selected").val();
                    o = o.find("[name=advertise_speed]");
                    if (o.is(":visible")) {
                        phy["advertise"] = o.is(":checked");
                    }
                }
                // MTU MSS
                $.extend(phy, panel["mtumss"].triggerHandler("export"));
                // MAC Address
                if (me.find(".mac_addr").is(":visible")) {
                    phy["mac"] = me.find("[name=default_mac]:checked").val() == "yes" ? null :
                        me.find("[name=mac_addr]").val();
                }
                // VLAN
                if (me.find(".vlan_panel").is(":visible")) {
                    phy["vlan"] = me.find("[name=vlan_enable]").is(":checked") ?
                        +me.find("[name=vlan_id]").val() : null;
                }
                // PoE
                o = me.find(".poe_panel");
                phy["poe"] = {
                    enable: o.find("[name=poe_enable]").is(":checked")
                }
                o = o.find("[name=sche_profile]");
                phy["poe"]["schedule"] = phy["poe"]["enable"] && o.is(":visible") ?
                    +o.find("option:selected").val() : null;
                // VPI VCI
                $.extend(phy, panel["vpivci"].triggerHandler("export"));
                // GRE uplink
                $.extend(phy, panel["greuplink"].triggerHandler("export"));
                // Openvpn uplink Priority and failback
                o = panel["openvpn_uplink_priority"];
                if (o.is(":visible")) {
                    $.extend(phy, { openvpn: o.triggerHandler("export") });
                }
                // Virtual WAN on VLAN
                o = panel["wovlan_uplink"];
                if (o.is(":visible")) {
                    $.extend(phy, { wovlan: o.triggerHandler("export") });
                }
                // Health Check Settings
                o = panel["hc"].triggerHandler("export");
                if (o !== undefined) {
                    json["healthcheck"] = o;
                }
                // Bandwidth Allowance Monitor Settings
                o = panel["bam"].triggerHandler("export");
                if (o !== undefined) {
                    json["bandwidthAllowanceMonitor"] = o;
                }
                // Additional IP Settings
                o = panel["multiip"];
                if (o.is(":visible")) {
                    json["multipleIp"] = o.triggerHandler("get");
                }
                // Dynamic DNS
                o = panel["ddns"].triggerHandler("export");
                if (o !== undefined) {
                    json["ddns"] = o;
                }
                // Wi-Fi Connection Profiles
                o = panel["wifi_profile"].triggerHandler("export");
                if (o !== undefined) {
                    json["wifiProfile"] = { list: o };
                }
                json["connection"] = conn;
                json["physical"] = phy;
                return json;
            })
            .on("warning.conn_dialog", function(e, info) {
                var me = $(this);
                var conn_o = (info["connection"] || {});
                var dns_o = conn_o["dns"] || {};
                var method_o = conn_o["method"] || {};
                var hc_o = (info["healthcheck"] || {})["method"] || {};
                var dfd = $.Deferred().resolveWith(me);
                var o;
                if (!$.isEmptyObject(method_o)) {
                    if (method_o["type"] == "staticIp") {
                        var ipn, m, gwn;
                        o = method_o["detail"] || {};
                        ipn = inet_aton(o["ip"]);
                        gwn = inet_aton(o["gateway"]);
                        m = inet_aton(netmask_ntoa(o["mask"]));
                        if ((gwn & m) != (ipn & m)) {
                            // Warn different network
                            dfd = dfd.then(function() {
                                return confirm_dialog([
                                    "WARNING: Default Gateway is not within the same network",
                                    "Are you sure you want to save anyway?"
                                ].join(" "), "OK", "Cancel").data("dfd")
                            });
                        }
                        // Warn RFC5771
                        if (!is_RFC5771_compliance(ipn)) {
                            dfd = dfd.then(function() {
                                return confirm_dialog([
                                    "The IP Address is not supported",
                                    "because it is an IANA reserved IP address.",
                                    "\nSee RFC 5771. Are you sure you want to proceed?"
                                ].join(" ")).data("dfd")
                            });
                        }
                    }
                }
                if (!$.isEmptyObject(dns_o) && !dns_o["auto"] && !_e(dns_o["host"])) {
                    /* If Health Check selected ping / nslookup and
                    selected use first 2 DNS Servers,
                    DNS cannot be empty and user shouldn't save the form
                    */
                    if ((hc_o["type"] == "nslookup" ||
                        hc_o["type"] == "ping") &&
                        !_e(hc_o["detail"]["host"])) {
                        dfd = dfd.then(function() {
                            alert_dialog(window.support_extsw ? [
                                "ERROR: No DNS Servers defined in this external access!"
                            ] : [
                                "ERROR: No DNS Servers defined in this",
                                "WAN connection! You must define DNS servers",
                                "on this WAN connection, or adjust your",
                                "Health Check Settings not relying on the",
                                "first DNS server."
                            ].join(" "))
                            return $.Deferred().rejectWith(this);
                        })
                    } else {
                        dfd = dfd.then(function() {
                            return confirm_dialog([
                                "WARNING: No DNS Servers defined in this",
                                (window.support_extsw ? "VLAN!" : "WAN connection!"),
                                "The device will not function if none of the working",
                                (window.support_extsw ? "VLANs" : "connections"),
                                "have DNS servers defined.",
                                "Are you sure you want to save anyway?"
                            ].join(" "), "OK", "Cancel").data("dfd")
                        })
                    }
                }
                if (me.data("port_type") == "wifi") {
                    var roaming_option = window.support_wifi_roaming_option || [];
                    var support_express = $.inArray("express", roaming_option) != -1;
                    if (roaming_option.length > 1 && support_express) {
                        var express_wan = window.support_express_wan || [];
                        var roam_o = (info["wifi"] || {})["roaming"] || {};
                        var algo = (roam_o["algorithm"] || {})["type"];
                        if (roam_o["enable"] && algo == "express" &&
                            express_wan[0] == info["id"]) {
                            dfd = dfd.then(function() {
                                return confirm_dialog([
                                    "Other Wi-Fi WAN and Wi-Fi AP will also be disabled",
                                    "are you sure you want to enable the Express Roaming?"
                                ].join(", ")).data("dfd");
                            });
                        }
                    }
                }
                return dfd;
            })
            .on("save.conn_dialog", function(e, info, is_enforce) {
                var me = $(this);
                var info = me.triggerHandler("export") || {};
                var dfd;
                var submit_fn = function(info, is_enforce) {
                    var me = $(this);
                    var data = {
                        func: "config.wan.connection",
                        agent: "webui",
                        action: "update",
                        instantActive: true,
                        list: [ info ],
                        enforce: !!is_enforce
                    };
                    var dfd = $.ajax("api.cgi", {
                        cache: false,
                        type: "POST",
                        contentType: "application/json; charset=UTF-8",
                        data: JSON.stringify(data),
                        context: this
                    });
                    if (!is_enforce) {
                        dfd = dfd.then(function(json, status, jqXHR) {
                            var o = jsonGetObject(json, [ "stat", "code.d", "message>msg" ]);
                            if (_e(o["msg"]) && o["code"] == 1) {
                                return confirm_dialog(o["msg"], "Yes", "No").data("dfd")
                                .then(function() {
                                    return submit_fn(true);
                                }, function() {
                                    return $.Deferred().rejectWith(this).promise();
                                }.bind(this))
                            } else {
                                return jqXHR;
                            }
                        })
                    }
                    return dfd;
                }.bind(this, info);
                if (!$.isEmptyObject(info)) {
                    var method_o = info["connection"]["method"] || {};
                    var form = (method_o["detail"] || {})["ovpnFile"];
                    if (me.data("port_type") == "openvpn" &&
                        form !== undefined) {
                        form.find("[name=connId]").val(me.data("conn_id"));
                        dfd = form.ajax_upload_form({
                            context: this
                        }).then(api_cgi_filter)
                    } else {
                        dfd = $.Deferred().resolveWith(this);
                    }
                    dfd.done(function() {
                        submit_fn()
                        .then(api_cgi_filter)
                        .done(function() {
                            // [Bug#24183] Auto refresh of
                            //	Dashboard message
                            var	o = $("#message_display");
    
                            if (o.length) {
                                o.triggerHandler("reload");
                            }
                        })
                        .done(function() {
                            var me = $(this);
                            var cb = me.data("callback");
                            if (cb) {
                                cb.triggerHandler("reload");
                            }
                            me.dialog("close");
                        });
                    }.bind(this));
                }
            })
            .on("open_dialog.conn_dialog", function(e, conn_id) {
                var me = $(this);
                var dfd;
                me.triggerHandler("__reset");
                if (!me.data("ref_conn")) {
                    dfd = me.triggerHandler("reload_summary")
                    .then(function() {
                        return this[0].triggerHandler("reload", [ this[1] ])
                    }.bind([me, conn_id]));
                } else {
                    dfd = me.triggerHandler("reload", [ conn_id ])
                }
                dfd.done(function() {
                    var wwanPoller = me.data("wwanPoller");
                    var panel = me.data("panel");
                    if (panel["status"]) {
                        dfd = panel["status"].triggerHandler("reload", [ conn_id ]);
                    } else {
                        dfd = $.Deferred().resolve();
                    }
                    if (wwanPoller) {
                        dfd.done(function() {
                            this.setPaused(true);
                        }.bind(wwanPoller));
                    }
                }.bind(me))
                me.dialog("open");
    
                o = panel["subnet_database"];
                if (o) {
                    o.data("connId", conn_id)
                    .triggerHandler("reload");
                }
            })
            .on("click", ".enable_action", function(e) {
                var me = $(e.delegateTarget);
                var panel = me.data("panel");
                if (panel["wovlan_uplink"]) {
                    panel["wovlan_uplink"].triggerHandler("redraw");
                }
                if (panel["conn_priority"]) {
                    panel["conn_priority"].toggleClass("hide", !$(this).is(":checked"));
                    panel["conn_priority"].triggerHandler("redraw");
                }
            })
            .on("click", ".check_physical_action", function(e) {
                $(e.delegateTarget).triggerHandler("check_physical_action");
            })
            .on("change keyup", ".check_physical_action", function(e) {
                $(e.delegateTarget).triggerHandler("check_physical_action");
            })
            .on("click", ".idle_action", function(e) {
                $(e.delegateTarget).triggerHandler("idle_action");
            })
            return div;
        }
    //	}}}
    // {{{ Hidden feature in Help text
        var toggle_unassociated_conn = function(is_show) {
            // Hide / Show Connection which has not associated with a particular slot module
            $(".conn_summary").toggleClass("hide_ghost", !is_show);
            Help["conn.toggle_unassociated"] = is_show ?
                Help["conn.hide_unassociated"] :
                Help["conn.show_unassociated"];
        };
        var show_cellular_engine_data_panel = function() {
            var o = $(".conn_status");
            if (o.length) {
                o = o.data("panel")["engineering_data"];
                if (o) {
                    o.triggerHandler("reload_engine_data_panel", [ true ]);
                }
            }
        }
        var show_simpin_management = function() {
            var conn_id = $(".conn_dialog").find(".cellular_settings").data("conn_id");
            nd();
            $("<div/>")
            .addClass("simpin_management")
            .dialog($.extend(std_dialog_param(), {
                title: "SIM PIN Management",
                width: "600px",
                close: function(event, ui) {
                    $.wait(1000, this).done(function() {
                        $(this).dialog("destroy").remove();
                    });
                },
                buttons: [{
                    text: "Set",
                    click: function() {
                        var me = $(this);
                        if (me.triggerHandler("validate")) {
                            me.triggerHandler("issue_command");
                        }
                    }
                }, {
                    text: "Close",
                    click: function() {
                        var me = $(this);
                        me.dialog("close");
                    }
                }]
            }))
            .append(
                $("<div/>").addClass("loadIcon center"),
                $("<div/>").addClass("smart_status hide"),
                $("<table/>").addClass("form_table sep hide").append(
                    create_form_row("Active SIM Card",
                        $("<span/>").addClass("active_sim_name")
                    ),
                    create_form_row("SIM PIN Retries",
                        $("<span/>").addClass("pin_retries")
                    ).addClass("pin_retries_panel hide"),
                    create_form_row("Action", $("<select/>", { name: "action" }).addClass("action").append(
                        $("<option/>").val("").text("--- Select an action --- "),
                        $("<option/>").val("enable").text("Enable PIN"),
                        $("<option/>").val("change").text("Change PIN"),
                        $("<option/>").val("disable").text("Disable PIN")
                    )),
                    create_form_row("Current PIN",
                        $("<input/>", { type: "password", name: "curr_pin", maxlength: 8 })
                            .attr("size", 9)
                    ).addClass("curr_pin_panel hide"),
                    create_form_row("New PIN (4-8 digits)",
                        $("<input/>", { type: "password", name: "new_pin", maxlength: 8 })
                            .attr("size", 9)
                    ).addClass("change_pin_panel hide"),
                    create_form_row("Confirm New PIN",
                        $("<input/>", { type: "password", name: "confirm_new_pin", maxlength: 8 })
                            .attr("size", 9)
                    ).addClass("change_pin_panel hide")
                )
            )
            .on("open_dialog.simpin_management", function(e, conn_id) {
                var me = $(this);
                me.find(".loadIcon").toggleClass("hide", false).end()
                .find(".form_table").toggleClass("hide", true).end()
                me.triggerHandler("reload", conn_id);
                me.dialog("open");
            })
            .on("__reset.simpin_management", function(e) {
                var me = $(this);
                me
                .find(".smart_status").removeClass("smart_status_red").end()
                .find("[name=action]")
                    .children().toggleOption(true).end()
                    .find(":first").prop("selected", true).end()
                .end()
                .find("input").val("").end()
                .find(".change_pin_panel,.curr_pin_panel,.pin_retries_panel,.smart_status")
                    .toggleClass("hide", true)
                .end();
            })
            .on("redraw.simpin_management", function(e, _info) {
                var me = $(this);
                var info = _info || {};
                var sim_id = info["sim_id"] || me.data("active_sim_id");
                var is_error = info ?
                    info["status_code"] < 1 || info["status_code"] > 3: true;
                if (is_error) {
                    me.find(".smart_status")
                        .text(info["status_msg"])
                        .addClass("smart_status_red")
                        .toggleClass("hide", false);
                }
                me.find(".loadIcon").toggleClass("hide", true).end()
                .find(".form_table").toggleClass("hide", false).end()
                me.find("input,select").prop("disabled", is_error);
                me
                .data({
                    active_sim_id: sim_id,
                    conn_id: info["conn_id"] || me.data("conn_id")
                })
                .find(".active_sim_name").text(sim_id > 0 ?
                    "SIM Card " + String.fromCharCode(64 + sim_id) : ""
                ).end()
                .find(".pin_retries_panel").toggleClass("hide",
                    !(0 <= info["pin_retries"] && info["pin_retries"] <= 3)
                    ).find(".pin_retries").text(info["pin_retries"]).end()
                .end()
                .find("select[name=action]")
                    .find("[value=enable]").toggleOption(
                        info["status_code"] == 3
                    ).end()
                    .find("[value=change]").toggleOption(
                        info["status_code"] == 1 || info["status_code"] == 2
                    ).end()
                    .find("[value=disable]").toggleOption(
                        info["status_code"] == 1 || info["status_code"] == 2
                    ).end()
                .end();
            })
            .on("reload.simpin_management", function(e, conn_id) {
                var me = $(this);
                var dfd_conn = $.ajax("api.cgi", {
                    cache: false,
                    data: {
                        func: "status.wan.connection",
                        id: conn_id
                    },
                    context: {
                        me: me,
                        conn_id: conn_id
                    }
                }).then(function(json, status, jqXHR) {
                    var conn_info = jsonGetObject(json, { "response>.o": {
                        "cellular>": {
                            "sim.o": [ "active.b" ]
                        }
                    }});
                    return $.Deferred().resolveWith(this, [ conn_info ]);
                })
                var dfd_simpin = $.ajax("api.cgi", {
                    cache: false,
                    data: {
                        func: "cmd.simpin",
                        action: "status",
                        wan_id: conn_id
                    },
                    context: {
                        me: me,
                        conn_id: conn_id
                    }
                }).then(function(json, status, jqXHR) {
                    var simpin_info = {};
                    if (json["stat"] && json["stat"] == "ok") {
                        simpin_info = jsonGetObject(json, { "response>": {
                            "sim_pin_status>": [
                                "wan_id.d", "status_msg", "sim_id.d",
                                "status_code.d", "pin_retries.d"
                            ]
                        }});
                    }
                    return $.Deferred().resolveWith(this, [ simpin_info ]);
                })
                $.when(dfd_conn, dfd_simpin).done(function(conn_info, simpin_info) {
                    var me = this[0]["me"];
                    var conn_id = this[1]["conn_id"];
                    var active_sim_id;
                    $.each(conn_info[conn_id]["sim"]["_order"], function(_, sim_id) {
                        var o = conn_info[conn_id]["sim"][sim_id] || {}
                        if (o["active"]) {
                            active_sim_id = sim_id;
                            return false;
                        }
                    });
                    me.triggerHandler("redraw", [ $.extend({
                        conn_id: conn_id,
                        sim_id: active_sim_id
                    }, simpin_info) ]);
                })
            })
            .on("validate.simpin_management", function() {
                var me = $(this);
                var o, v;
                o = me.find("select[name=action]");
                if (isempty(o.val())) {
                    return err("Please select an action", o);
                }
                o = me.find("[name=curr_pin]");
                o.val(trim(o.val()));
                if (!checkSIMPINFormat(o.val())) {
                    return err("Invalid SIM PIN format", o);
                }
                if (me.find("[name=action] option:selected").val() == "change") {
                    o = me.find("[name=new_pin]");
                    o.val(trim(o.val()));
                    if (isempty(o.val())) {
                        return err("New PIN cannot be empty", o);
                    }
                    if (!checkSIMPINFormat(o.val())) {
                        return err("SIM PIN must be in 4 to 8 digits only", o);
                    }
                    if (o.val() != trim(me.find("[name=confirm_new_pin]").val())) {
                        return err("New PIN does not match", o);
                    }
                }
                return true;
            })
            .on("issue_command.simpin_management", function(e) {
                var me = $(this);
                var conn_id = me.data("conn_id");
                var active_sim_id = me.data("active_sim_id");
                var curr_pin = me.find("[name=curr_pin]").val();
                var new_pin = me.find("[name=new_pin]").val();
                $.ajax("api.cgi", {
                    cache: false,
                    data: {
                        func: "cmd.simpin",
                        wan_id: conn_id,
                        sim_id: active_sim_id,
                        action: me.find("[name=action] option:selected").val(),
                        curr_pin: curr_pin,
                        new_pin: new_pin
                    },
                    type: "POST",
                    context: {
                        me: me,
                        curr_pin: curr_pin,
                        new_pin: new_pin
                    }
                }).done(function(json) {
                    var me = this["me"];
                    var o = me.find(".smart_status");
                    me.triggerHandler("__reset");
                    err();
                    if (json["stat"] && json["stat"] == "ok") {
                        var sim_name = me.find(".active_sim_name").text();
                        var info = jsonGetObject(json, { "response>": [
                            "sim_pin_cmd_issued>cmd_issued",
                            { "sim_pin_cmd_stat>cmd_stat": [
                                "wan_id.d", "sim_id.d", "pin_retries.d",
                                "error_code.d", "error_msg", "status_code.d", "status_msg"
                            ]}
                        ]});
                        var cmd_stat = info["cmd_stat"];
                        if (cmd_stat["error_code"] == 0) {
                            switch(info["cmd_issued"]) {
                            case "enable":
                                o.text(sim_name + " is enabled successfully!")
                                    .toggleClass("hide", false);
                                saved_pin = this["curr_pin"];
                                break;
                            case "change":
                                o.text(sim_name + " is changed successfully!")
                                    .toggleClass("hide", false);
                                saved_pin = this["new_pin"];
                                break;
                            case "disable":
                                o.text(sim_name + " is disabled successfully!")
                                    .toggleClass("hide", false);
                                saved_pin = "";
                                break;
                            }
                        } else {
                            o.text(cmd_stat["error_msg"])
                                .toggleClass("hide", false)
                                .addClass("smart_status_red");
                        }
                        me.triggerHandler("redraw", [ cmd_stat ]);
                    } else {
                        o.text(json["message"])
                            .toggleClass("hide", false);
                    }
                })
            })
            .on("change keyup", ".action", function(e) {
                var v = $(this).find("option:selected").val();
                $(e.delegateTarget)
                .find(".curr_pin_panel").toggleClass("hide", v == "").end()
                .find(".change_pin_panel").toggleClass("hide", v != "change").end()
            })
            .triggerHandler("open_dialog", conn_id);
        }
        var switch_modem_ethernet = function(to_ether) {
            var dlg = $(".conn_dialog");
            var	conn_id = dlg.data("conn_id");
            $.ajax("admin.cgi", {
                cache: false,
                type: "POST",
                data: {
                    section: "WAN_modem_ethernet_toggle",
                    conn_id: conn_id,
                    type: (to_ether? "ethernet": "modem")
                },
                context: dlg
            })
            .then(admin_cgi_filter)
            .done(function() {
                nd();
                $(this).triggerHandler("open_dialog", conn_id);
            });
        }
        root.create_status_panel = __create_status_panel;
        root.create_operator_settings_panel = __create_operator_settings_panel;
        root.toggle_unassociated_conn = toggle_unassociated_conn;
        root.show_cellular_engine_data_panel = show_cellular_engine_data_panel;
        root.switch_modem_ethernet = switch_modem_ethernet;
        root.get_signal_strength_display = get_signal_strength_display;
        root.create_conn_dialog = __create_conn_dialog;
        root.create_wifi_profile_dialog = __create_wifi_profile_dialog
        root.wifi_auth_map = __wifi_auth_map;
        root.create_status_panel = __create_status_panel;
        //	}}}
    })(window);
    