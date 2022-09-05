# Description

<!-- Explain your change, and the reason for it. This should include,
but NOT be limited to, the content of the bug ticket(s) or task(s) you are addressing -->

## Screenshots (if required)

<!-- If this change affects the User Interface, include screenshots here. Do not use links to an external tool; these should be images within GitHub to ensure that they are still available at later dates. -->

## Priority

<!-- How urgent is this ticket? If it is very urgent, explain why and for whom. -->

## Risk Assessment

<!--
Think carefully about *how often the changed code is run* and *what the impact would be if that were to happen*. With that in mind, select from one of the following categories:

*Low risk*
> Code where failures would affect a small proportion of requests/users (e.g. 1%). Failures would affect only a few low-traffic pages (e.g. Innovation Dojo) or if the change failed we would be in no worse a situation than we were before the change (e.g. attempting to reduce the number of database queries in a view).

*Medium risk*
> Code where failures would affect a medium proportion of requests/users (e.g. 10%). Failures would affect a significant number of users (e.g. SIM Dojo Dashboard) but could not bring down the entire site or make it unusable.

*High risk*
> Code where failures would affect most requests/users (e.g. >=50%) or could fail in such a way that the site as a whole is disabled. Failures would affect most users or core functionality (e.g. MD User Dashboard) or result in problems with configuration of any shared resources (e.g. the database, JS, CSS, Rails boot).

If your change is not high risk, make sure to explain how often the code will be run and if it does not affect production etc.
-->

## Rollout / Rollback Plan

<!--
If your PR is *medium* or *high risk*, describe *how we'll know if something goes wrong with this code in production* and, if possible, *how we'll be able to quickly, safely disable it* in such a case (e.g. feature switches etc.). Document the specific information needed to put the plan into effect e.g if you're using a feature switch, make sure the name of the flag (or a link to its config page) is included.

If your PR makes changes to a database table or legacy data, describe how you have ensured that the pre-existing code will continue to function during deployment. For example, by removing a dependency on a column but leaving that column in place rather than dropping it.
-->

## Performance (if relevant)

<!-- If your code contains loops, operates over many entities, or in other ways represents a risk for performance, describe how you have checked this and with what data volumes you have assessed the performance. Where such assessments have been done, give details of the time taken for your test data volume. Where they have not, explain why and what would need to change to make them possible. -->

## Assessments

<!-- Ensure that you have filled in, checked, and satisfied the below requirements: -->

- [ ] You have assigned yourself, requested at least one reviewer, and set appropriate labels and release milestone for this PR
- [ ] Test coverage of all changed code, at both function and branch level
- [ ] Appropriate refactoring work done of any changed previously existing functions, methods, classes and modules
- [ ] Clear, accurate, useful comments on new functions, methods, classes and modules
- [ ] Adherence to maintainability metrics including code complexity, delegation and DRY principles
- [ ] `rubocop -A` or `yarn lint` has been run across the repository
- https://github.com/marketdojo/auction/wiki/Code-Review-checklist will not encounter anything of concern
