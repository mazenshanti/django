            $scope.unselectCandidate = function (id) {
                var selectedMember = _.find($scope.searchResults.members.results, function (member) { return member.id == id; });
                $scope.selectedCandidates = remove_value($scope.selectedCandidates, id);
                $scope.moveEmployeesCandidates = $scope.moveEmployeesCandidates.filter(function (member) {
                    return member.id != selectedMember.user_id;
                });
                $scope.isSendNoticeNYEnabled();
                $scope.isSendNoticeCAEnabled();
            };

            $scope.toggleSelectAll = function () {
                if ($scope.selectedCandidates.length >= $scope.searchResults.members.results.length) {
                    $scope.selectedCandidates = [];
                    $scope.moveEmployeesCandidates = [];
                } else {
                    $scope.selectedCandidates = [];
                    $scope.moveEmployeesCandidates = [];
                    for (var i in $scope.searchResults.members.results) {
                        var member = $scope.searchResults.members.results[i];
                        var cardId = member.id;
                        $scope.selectedCandidates.push(cardId);
                        $scope.moveEmployeesCandidates.push(member);
                    }
                }

                $scope.isSendNoticeNYEnabled();
                $scope.isSendNoticeCAEnabled();
            };
